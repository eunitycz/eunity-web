import { marked } from 'marked';

export const routes = {
  home: { cs: '/', en: '/en/' },
  offer: { cs: '/projekty/', en: '/en/projects/' },
  our: { cs: '/projekty/nase-projekty/', en: '/en/projects/our-projects/' },
  sent: { cs: '/projekty/vyslali-jsme/', en: '/en/projects/we-sent/' },
  booklets: { cs: '/booklety/', en: '/en/booklets/' },
  worksheets: { cs: '/pracovni-listy/', en: '/en/worksheets/' },
  faq: { cs: '/otazky-a-odpovedi/', en: '/en/faq/' },
  about: { cs: '/o-nas/', en: '/en/about-us/' },
  support: { cs: '/podporte-nas/', en: '/en/support-us/' },
  contact: { cs: '/kontakt/', en: '/en/contact/' },
};

export const url = (key, lang) => routes[key]?.[lang] ?? key;
export const projectUrl = (slug, lang) => (lang === 'cs' ? `/projekty/${slug}/` : `/en/projects/${slug}/`);

export const t = {
  cs: {
    projects: 'Projekty',
    offer: 'Aktuální nabídka',
    our: 'Naše projekty',
    sent: 'Vyslali jsme na projekt',
    materials: 'Materiály',
    booklets: 'Booklety',
    worksheets: 'Pracovní listy',
    faq: 'Q&A',
    faqLong: 'Otázky a odpovědi',
    about: 'O nás',
    support: 'Podpořte nás',
    contact: 'Kontakt',
    menu: 'Menu',
    offerTitle: 'Aktuální nabídka projektů',
    allProjects: 'Všechny projekty',
    allReports: 'Všechny reporty',
    allQuestions: 'Všechny otázky',
    whereWeWere: 'Kde už jsme byli',
    detail: 'Detail a přihláška',
    readReport: 'Přečíst report',
    noOffer: 'Právě teď nemáme otevřenou žádnou výzvu. Sleduj náš Instagram – nové projekty tam dáváme jako první.',
    nothingYet: 'Brzy tu přibudou.',
    type: { nas: 'Náš projekt', vyslani: 'Vyslali jsme' },
    format: { vymena: 'Výměna mládeže', trenink: 'Tréninkový kurz', jine: 'Projekt' },
    date: 'Termín',
    place: 'Místo',
    age: 'Věk',
    deadline: 'Přihlášky do',
    apply: 'Přihlásit se',
    infopack: 'Infopack',
    aboutProject: 'O projektu',
    report: 'Report z projektu',
    gallery: 'Fotogalerie',
    videos: 'Videa',
    materialsFromProject: 'Materiály z projektu',
    download: 'Stáhnout PDF',
    back: 'Zpět',
    reportBy: 'Report napsal(a)',
    donate: 'Darovat',
    volunteer: 'Dobrovolnictví',
    partnership: 'Partnerství',
    bank: 'Číslo účtu',
    vs: 'Variabilní symbol',
    writeUs: 'Napište nám',
    contactTitle: 'Kontakt',
    formName: 'Jméno a příjmení',
    formEmail: 'E-mail',
    formMessage: 'Zpráva',
    formSend: 'Odeslat zprávu',
    formThanks: 'Děkujeme za zprávu, brzy se ozveme.',
    org: 'Spolek',
    social: 'Sociální sítě',
    partners: 'Partneři',
    ico: 'IČO',
    langSwitch: 'EN',
    lightbox: 'Zavřít',
    ourProjectsIntro: 'Výměny mládeže, které EUnity samo pořádá v Česku.',
    sentIntro: 'Projekty partnerských organizací v zahraničí, na které jsme vyslali mladé lidi a youth workery. Přečti si jejich reporty.',
    offerIntro: 'Projekty, na které se můžeš právě teď přihlásit.',
    bookletsIntro: 'Metody, aktivity a inspirace z našich projektů. Zdarma ke stažení.',
    worksheetsIntro: 'Hotové aktivity pro učitele a youth workery, připravené do hodiny nebo na workshop.',
  },
  en: {
    projects: 'Projects',
    offer: 'Open calls',
    our: 'Our projects',
    sent: 'Where we sent participants',
    materials: 'Resources',
    booklets: 'Booklets',
    worksheets: 'Worksheets',
    faq: 'Q&A',
    faqLong: 'Questions & answers',
    about: 'About us',
    support: 'Support us',
    contact: 'Contact',
    menu: 'Menu',
    offerTitle: 'Open calls',
    allProjects: 'All projects',
    allReports: 'All reports',
    allQuestions: 'All questions',
    whereWeWere: 'Where we’ve been',
    detail: 'Details & application',
    readReport: 'Read the report',
    noOffer: 'There are no open calls right now. Follow our Instagram – we post new projects there first.',
    nothingYet: 'Coming soon.',
    type: { nas: 'Our project', vyslani: 'We sent participants' },
    format: { vymena: 'Youth exchange', trenink: 'Training course', jine: 'Project' },
    date: 'Dates',
    place: 'Place',
    age: 'Age',
    deadline: 'Apply by',
    apply: 'Apply',
    infopack: 'Infopack',
    aboutProject: 'About the project',
    report: 'Project report',
    gallery: 'Gallery',
    videos: 'Videos',
    materialsFromProject: 'Resources from this project',
    download: 'Download PDF',
    back: 'Back',
    reportBy: 'Report by',
    donate: 'Donate',
    volunteer: 'Volunteering',
    partnership: 'Partnership',
    bank: 'Bank account',
    vs: 'Reference',
    writeUs: 'Write to us',
    contactTitle: 'Contact',
    formName: 'Full name',
    formEmail: 'E-mail',
    formMessage: 'Message',
    formSend: 'Send message',
    formThanks: 'Thank you, we’ll get back to you soon.',
    org: 'Organisation',
    social: 'Social media',
    partners: 'Partners',
    ico: 'Company ID',
    langSwitch: 'CZ',
    lightbox: 'Close',
    ourProjectsIntro: 'Youth exchanges organised by EUnity in Czechia.',
    sentIntro: 'Projects run by partner organisations abroad where we sent young people and youth workers. Read their reports.',
    offerIntro: 'Projects you can apply for right now.',
    bookletsIntro: 'Methods, activities and inspiration from our projects. Free to download.',
    worksheetsIntro: 'Ready-made activities for teachers and youth workers, for a lesson or a workshop.',
  },
};

export const countries = {
  AL: ['Albánie', 'Albania'], AM: ['Arménie', 'Armenia'], AT: ['Rakousko', 'Austria'], BA: ['Bosna a Hercegovina', 'Bosnia and Herzegovina'],
  BE: ['Belgie', 'Belgium'], BG: ['Bulharsko', 'Bulgaria'], CY: ['Kypr', 'Cyprus'], CZ: ['Česko', 'Czechia'], DE: ['Německo', 'Germany'],
  DK: ['Dánsko', 'Denmark'], EE: ['Estonsko', 'Estonia'], ES: ['Španělsko', 'Spain'], FI: ['Finsko', 'Finland'], FR: ['Francie', 'France'],
  GB: ['Velká Británie', 'United Kingdom'], GE: ['Gruzie', 'Georgia'], GR: ['Řecko', 'Greece'], HR: ['Chorvatsko', 'Croatia'],
  HU: ['Maďarsko', 'Hungary'], IE: ['Irsko', 'Ireland'], IS: ['Island', 'Iceland'], IT: ['Itálie', 'Italy'], LT: ['Litva', 'Lithuania'],
  LU: ['Lucembursko', 'Luxembourg'], LV: ['Lotyšsko', 'Latvia'], MD: ['Moldavsko', 'Moldova'], ME: ['Černá Hora', 'Montenegro'],
  MK: ['Severní Makedonie', 'North Macedonia'], MT: ['Malta', 'Malta'], NL: ['Nizozemsko', 'Netherlands'], NO: ['Norsko', 'Norway'],
  PL: ['Polsko', 'Poland'], PT: ['Portugalsko', 'Portugal'], RO: ['Rumunsko', 'Romania'], RS: ['Srbsko', 'Serbia'], SE: ['Švédsko', 'Sweden'],
  SI: ['Slovinsko', 'Slovenia'], SK: ['Slovensko', 'Slovakia'], TR: ['Turecko', 'Türkiye'], UA: ['Ukrajina', 'Ukraine'],
};
export const countryName = (code, lang) => countries[code]?.[lang === 'cs' ? 0 : 1] ?? code ?? '';

// 20.–28. 6. 2026 / 20–28 June 2026
const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export function dateRange(start, end, lang) {
  if (!start) return '';
  end = end || start;
  const [d1, m1, y1] = [start.getDate(), start.getMonth() + 1, start.getFullYear()];
  const [d2, m2, y2] = [end.getDate(), end.getMonth() + 1, end.getFullYear()];
  if (lang === 'cs') {
    if (+start === +end) return `${d1}. ${m1}. ${y1}`;
    if (y1 !== y2) return `${d1}. ${m1}. ${y1} – ${d2}. ${m2}. ${y2}`;
    if (m1 !== m2) return `${d1}. ${m1}. – ${d2}. ${m2}. ${y2}`;
    return `${d1}.–${d2}. ${m2}. ${y2}`;
  }
  if (+start === +end) return `${d1} ${monthsEn[m1 - 1]} ${y1}`;
  if (y1 !== y2) return `${d1} ${monthsEn[m1 - 1]} ${y1} – ${d2} ${monthsEn[m2 - 1]} ${y2}`;
  if (m1 !== m2) return `${d1} ${monthsEn[m1 - 1]} – ${d2} ${monthsEn[m2 - 1]} ${y2}`;
  return `${d1}–${d2} ${monthsEn[m2 - 1]} ${y2}`;
}
export const oneDate = (d, lang) => (d ? dateRange(d, d, lang) : '');

export const md = (s) => (s ? marked.parse(String(s)) : '');

export function youtubeId(u) {
  const m = String(u).match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}
