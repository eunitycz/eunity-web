import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.eunity.cz',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      i18n: { defaultLocale: 'cs', locales: { cs: 'cs-CZ', en: 'en-GB' } },
    }),
  ],
});
