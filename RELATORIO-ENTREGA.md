# Relatório de entrega — site Lobato Engenharia

Data: 02/10/2026

## URLs

- **Produção (Vercel):** https://lobato-engenharia.vercel.app
- Alias da equipe: https://lobato-engenharia-llanos-projects.vercel.app
- **Repositório:** https://github.com/guilhermellanos03-web/lobato-engenharia
- **Domínio próprio:** `www.lobatoengenharia.com.br` — pendente (DNS não resolve ainda).
  O site publica primeiro na Vercel; ao liberar o DNS, conectar o domínio e trocar
  `PUBLIC_SITE_URL` (ver README).

Projeto Vercel **separado** (`lobato-engenharia`, equipe llanos-projects). Não
compartilha nada com outros sites. A proteção por login (Vercel Authentication) foi
desativada, então a URL é pública.

## Páginas (12)

| Página | URL |
|---|---|
| Home | `/` |
| Soluções (visão geral) | `/servicos/` |
| Automação Industrial | `/servicos/automacao-industrial/` |
| Automação Predial | `/servicos/automacao-predial/` |
| Domótica | `/servicos/domotica/` |
| IoT e Indústria 4.0 | `/servicos/iot-industria-4-0/` |
| Elétrica Predial | `/servicos/eletrica-predial/` |
| TI e Telecomunicações | `/servicos/ti-telecomunicacoes/` |
| Sobre | `/sobre/` |
| Contato | `/contato/` |
| Política de Privacidade | `/politica-de-privacidade/` |
| 404 personalizada | qualquer rota inexistente |

## Resultado do Lighthouse (URL de produção)

| Categoria | Mobile | Desktop |
|---|---|---|
| Performance | **98** | **98** |
| Acessibilidade | **100** | **100** |
| Boas práticas | **100** | **100** |
| SEO | **100** | **100** |
| LCP | 1,8 s | 0,9 s |
| CLS | 0 | 0,003 |

Metas do briefing (mobile > 85, desktop > 90) superadas.

## Testes de responsividade

Sem rolagem horizontal e sem elementos estourando a viewport em 320, 375, 390, 768,
1024, 1440 e 1920 px. Menu colapsa em hambúrguer abaixo de 1024 px. Tipografia e
espaçamentos fluidos com `clamp()`.

## SEO técnico / AEO / GEO

- `title`, `meta description`, `canonical`, Open Graph e Twitter Card por página.
- H1 único por página; headings em ordem sequencial.
- Dados estruturados: `ProfessionalService`, `WebSite`, `Service` (por serviço),
  `FAQPage` e `BreadcrumbList`. Somente dados confirmados.
- Breadcrumbs visíveis nas páginas internas.
- `robots.txt` e `sitemap.xml` publicados e válidos.
- Imagem OG 1200x630 gerada. Favicon e manifest publicados.
- FAQ visível com respostas diretas (bom para AEO/GEO).

## Conversão configurada

- CTA principal "Solicitar avaliação pelo WhatsApp" no cabeçalho, primeira dobra,
  serviços, CTA final, rodapé e botão flutuante.
- Links de WhatsApp abrem em nova aba (`target="_blank" rel="noopener noreferrer"`),
  com `data-contact`, `data-location` e `data-service`.
- Mensagem do WhatsApp pré-preenchida e contextual por serviço.
- Formulário de contato (sem backend): monta a mensagem e abre o WhatsApp.
  Não armazena dados. Honeypot anti-spam e checkbox de consentimento (LGPD).
- Eventos preparados (disparam se GA4/Meta existirem): `whatsapp_click`,
  `phone_click`, `email_click`, `form_start`, `form_submit`.

## Status de integrações

- **Analytics (GA4, Google Ads, Clarity, Meta Pixel):** preparados, sem IDs
  (nenhum ID fictício). Preencher nas variáveis da Vercel quando o cliente fornecer.
- **Google Search Console:** a configurar quando o domínio próprio estiver ativo.
- **Mapa de calor (Clarity):** revisar 7 dias após a ativação (ver `CHECKLIST-POS-ENTREGA.md`).

## Dados pendentes

Ver `DADOS-PENDENTES.md`. Resumo do mais crítico:

- Confirmar que o WhatsApp **(41) 99976-6497** recebe mensagens.
- Confirmar CNPJ e se "desde 2018" pode ser publicado (hoje ocultos por flag).
- Enviar logo oficial (o atual é provisório).
- Enviar fotos reais e cases autorizados (seções de prova social ocultas até lá).
- Conectar o domínio `lobatoengenharia.com.br`.

## Identidade

- Paleta azul/branca com ciano de apoio; verde só no botão do WhatsApp.
- Tipografia: Space Grotesk (títulos) + Inter (texto), self-hosted.
- Temas claro (padrão) e escuro, com respeito a `prefers-color-scheme` e alternador.
- Visual técnico com diagrama de integração de sistemas (sem foto de banco
  apresentada como projeto da Lobato).

---

Desenvolvido por Llanos.
