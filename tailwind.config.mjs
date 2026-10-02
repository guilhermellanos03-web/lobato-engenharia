/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Marca (fixas, nao mudam com o tema)
        brand: {
          DEFAULT: '#0874F9', // azul principal
          deep: '#061A33',    // azul profundo
          mid: '#0E4F9A',     // azul intermediario
          cyan: '#27B8E8',    // ciano de apoio
        },
        wa: '#16A34A', // verde, somente botao WhatsApp (contraste AA em icone)
        // Semanticas (viram CSS vars, alternam no modo escuro)
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        body: 'rgb(var(--body) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        'brand-ink': 'rgb(var(--brand-ink) / <alpha-value>)', // azul acessivel p/ links/icones
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: { content: '1180px' },
      borderRadius: { xl2: '1.25rem' },
      boxShadow: {
        card: '0 1px 2px rgba(6,26,51,.06), 0 8px 24px -12px rgba(6,26,51,.18)',
      },
    },
  },
  plugins: [],
};
