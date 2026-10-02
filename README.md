# Lobato Engenharia & Sistemas de Automação — site institucional

Site institucional multipágina, mobile-first, focado em conversão por WhatsApp.
Feito em **Astro + Tailwind** (saída estática, sem framework pesado no navegador).

## Stack

- [Astro 4](https://astro.build) (saída estática)
- [Tailwind CSS 3](https://tailwindcss.com)
- Fontes self-hosted via `@fontsource` (Space Grotesk + Inter), `font-display: swap`
- Ícones SVG inline (sem biblioteca de ícones)
- Sem backend: o formulário monta uma mensagem e abre o WhatsApp

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera /dist
npm run preview  # serve /dist
```

Node 18+.

## Estrutura

```
src/
  data/site.ts          # FONTE ÚNICA: contatos, serviços, FAQ, flags, textos
  layouts/Base.astro    # <head>, SEO, JSON-LD, temas, analytics, eventos
  components/            # Navbar, Hero, Solutions, Process, About, Faq, Footer, etc.
  pages/
    index.astro                 # /
    servicos/index.astro        # /servicos/
    servicos/[slug].astro       # /servicos/<serviço>/  (6 páginas)
    sobre.astro                 # /sobre/
    contato.astro               # /contato/
    politica-de-privacidade.astro
    404.astro
public/                 # favicons, og-image, robots.txt, sitemap.xml, manifest
```

## Editar conteúdo

Quase tudo está em **`src/data/site.ts`**:

- **Contatos**: `site.phoneDigits`, `site.email`, `site.linkedin`.
- **Serviços**: array `services` (título, textos, escopo, resultados, FAQ, relacionados).
  Cada item vira automaticamente um card na home e uma página `/servicos/<slug>/`.
- **FAQ / processo / público / diferenciais**: arrays no mesmo arquivo.
- **Flags** (`flags`): controlam a exibição de dados não confirmados
  (`showCnpj`, `showFounded`, `showProjects`, `showReviews`). Ver `DADOS-PENDENTES.md`.

## Variáveis de ambiente

Copie `.env.example` para `.env`. Nenhuma é obrigatória.

| Variável | Para quê |
|---|---|
| `PUBLIC_SITE_URL` | URL pública (canonical/OG/sitemap). Trocar para o domínio final quando ativo. |
| `PUBLIC_NOINDEX` | `true` adiciona noindex no site todo (esconder dos buscadores). |
| `PUBLIC_WHATSAPP` | Sobrescreve o número do WhatsApp sem mexer no código. |
| `PUBLIC_GA4_ID` | Google Analytics 4. |
| `PUBLIC_GOOGLE_ADS_ID` | Google Ads. |
| `PUBLIC_CLARITY_ID` | Microsoft Clarity. |
| `PUBLIC_META_PIXEL_ID` | Meta Pixel. |
| `PUBLIC_GSC_VERIFICATION` | Meta tag de verificação do Search Console. |

Os scripts de analytics só são injetados quando o ID correspondente existe
(sem IDs fictícios).

## Deploy (Vercel)

Projeto separado `lobato-engenharia` (não compartilha nada com outros sites).
Conectado ao repositório GitHub `guilhermellanos03-web/lobato-engenharia`:
cada push na branch `main` gera um novo deploy de produção.

### Conectar o domínio próprio (quando o DNS estiver disponível)

1. Vercel → projeto `lobato-engenharia` → Settings → Domains → adicionar
   `www.lobatoengenharia.com.br` (e `lobatoengenharia.com.br` com redirect para o www).
2. Apontar o DNS no registro.br conforme as instruções da Vercel.
3. Definir a variável `PUBLIC_SITE_URL=https://www.lobatoengenharia.com.br` e refazer o deploy.
4. Atualizar `public/robots.txt` e `public/sitemap.xml` para o domínio final.
5. Verificar canonical, Open Graph e sitemap.
6. Criar/verificar a propriedade no Google Search Console e enviar o sitemap.

## Conversão e eventos

- CTA principal em todo o site: **"Solicitar avaliação pelo WhatsApp"**.
- Links de WhatsApp abrem em nova aba (`target="_blank" rel="noopener noreferrer"`),
  com atributos `data-contact`, `data-location` e `data-service` para rastreamento.
- Eventos preparados (disparam se GA4/Meta existirem): `whatsapp_click`,
  `phone_click`, `email_click`, `form_start`, `form_submit`.

## Acessibilidade e performance

- HTML semântico, skip link, foco visível, navegação por teclado, `aria-expanded` no menu.
- Contraste AA, temas claro (padrão) e escuro com respeito a `prefers-color-scheme`.
- Imagens com dimensões, SVG para ícones, JS mínimo, fontes self-hosted.

---

Desenvolvido por Llanos.
