import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// URL de produção (canonical / OG / sitemap).
// O domínio lobatoengenharia.com.br ainda nao resolve, entao o canonical aponta
// para a URL da Vercel ate o DNS ser conectado. Ao conectar o dominio, basta
// definir PUBLIC_SITE_URL=https://www.lobatoengenharia.com.br e rebuildar.
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://lobato-engenharia-llanos-projects.vercel.app';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [tailwind({ applyBaseStyles: false })],
});
