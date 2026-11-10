// Načítání obsahu z YAML souborů, které upravuje administrace (Sveltia CMS).
// Soubory mají tvar { cs: {...}, en: {...} }. Co chybí v angličtině, doplní se z češtiny.
import { load as yamlLoad } from 'js-yaml';

const LOCALES = ['cs', 'en'];

const projectFiles = import.meta.glob('/content/projekty/*.yml', { query: '?raw', import: 'default', eager: true });
const bookletFiles = import.meta.glob('/content/booklety/*.yml', { query: '?raw', import: 'default', eager: true });
const worksheetFiles = import.meta.glob('/content/pracovni-listy/*.yml', { query: '?raw', import: 'default', eager: true });
const pageFiles = import.meta.glob('/content/stranky/*.yml', { query: '?raw', import: 'default', eager: true });

const isEmpty = (v) => v === undefined || v === null || v === '' || (Array.isArray(v) && v.length === 0);

function merge(base, over) {
  if (Array.isArray(base) && Array.isArray(over)) {
    const len = Math.max(base.length, over.length);
    return Array.from({ length: len }, (_, i) => merge(base[i], over[i]));
  }
  if (base && over && typeof base === 'object' && typeof over === 'object' && !(base instanceof Date)) {
    const out = { ...base };
    for (const [k, v] of Object.entries(over)) out[k] = merge(base[k], v);
    return out;
  }
  return isEmpty(over) ? base : over;
}

function localize(raw, lang) {
  const data = yamlLoad(raw) || {};
  const top = Object.fromEntries(Object.entries(data).filter(([k]) => !LOCALES.includes(k)));
  const other = lang === 'cs' ? 'en' : 'cs';
  // pořadí: společná pole → druhý jazyk (záloha) → čeština → požadovaný jazyk
  let out = merge(top, data[other] || {});
  out = merge(out, data.cs || {});
  out = merge(out, data[lang] || {});
  return out;
}

function toDate(v) {
  if (!v) return null;
  if (v instanceof Date) return new Date(v.getUTCFullYear(), v.getUTCMonth(), v.getUTCDate());
  const m = String(v).match(/^(\d{4})-(\d{2})-(\d{2})/);
  return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null;
}
const slugOf = (path) => path.split('/').pop().replace(/\.ya?ml$/, '');

export function getPage(name, lang) {
  const key = Object.keys(pageFiles).find((p) => slugOf(p) === name);
  return key ? localize(pageFiles[key], lang) : {};
}

function today() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export function getProjects(lang) {
  const now = today();
  return Object.entries(projectFiles)
    .map(([path, raw]) => {
      const p = localize(raw, lang);
      const start = toDate(p.start);
      const end = toDate(p.end) || start;
      const deadline = toDate(p.deadline);
      return {
        ...p,
        slug: slugOf(path),
        start,
        end,
        deadline,
        gallery: (p.gallery || []).map((g) => (typeof g === 'string' ? g : g?.image)).filter(Boolean),
        videos: (p.videos || []).map((v) => (typeof v === 'string' ? v : v?.url)).filter(Boolean),
        upcoming: start ? start > now : false,
        open: start ? start > now && (!deadline || deadline >= now) : false,
      };
    })
    .filter((p) => !p.hidden && p.title)
    .sort((a, b) => (b.start?.getTime() || 0) - (a.start?.getTime() || 0));
}

function getMaterials(files, lang) {
  return Object.entries(files)
    .map(([path, raw]) => ({ ...localize(raw, lang), slug: slugOf(path) }))
    .filter((m) => !m.hidden && m.title)
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
}

export const getBooklets = (lang) => getMaterials(bookletFiles, lang);
export const getWorksheets = (lang) => getMaterials(worksheetFiles, lang);

export function getStats(lang) {
  const home = getPage('home', lang);
  const past = getProjects(lang).filter((p) => !p.upcoming);
  const auto = {
    projects: past.length,
    countries: new Set(past.map((p) => p.country).filter(Boolean)).size,
    ours: past.filter((p) => p.type === 'nas').length,
    participants: past.reduce((s, p) => s + (Number(p.participants) || 0), 0),
  };
  return (home.stats || [])
    .map((s) => ({
      label: s.label,
      value: s.source && s.source !== 'manual' ? (isEmpty(s.value) ? auto[s.source] : s.value) : s.value,
    }))
    .filter((s) => !isEmpty(s.value) && s.value !== 0);
}
