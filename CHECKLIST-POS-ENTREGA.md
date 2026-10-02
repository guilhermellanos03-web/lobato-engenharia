# Checklist pós-entrega — Lobato Engenharia

## Go-live (quando o cliente aprovar e o domínio estiver pronto)

- [ ] Confirmar WhatsApp, e-mail, CNPJ e "desde 2018" (ver `DADOS-PENDENTES.md`).
- [ ] Ativar flags confirmadas em `src/data/site.ts` (`showCnpj`, `showFounded`, ...).
- [ ] Conectar `www.lobatoengenharia.com.br` na Vercel e apontar o DNS.
- [ ] `PUBLIC_SITE_URL` = domínio final e refazer deploy.
- [ ] Atualizar `robots.txt` e `sitemap.xml` para o domínio final.
- [ ] Conferir `PUBLIC_NOINDEX=false` (site indexável) em produção.
- [ ] Rodar o Lighthouse na URL final (mobile e desktop).
- [ ] Testar WhatsApp, telefone, e-mail e formulário no celular real.
- [ ] Verificar todas as páginas e links.

## Google (após o domínio ativo)

- [ ] Criar/verificar a propriedade no Google Search Console (DNS).
- [ ] Enviar o `sitemap.xml`.
- [ ] Solicitar indexação das páginas principais.
- [ ] Conferir cobertura e canonical.
- [ ] Alinhar nome, telefone e cidade com o Google Meu Negócio.

## Analytics (quando houver IDs)

- [ ] Preencher `PUBLIC_GA4_ID`, `PUBLIC_GOOGLE_ADS_ID`, `PUBLIC_CLARITY_ID`,
      `PUBLIC_META_PIXEL_ID` nas variáveis da Vercel.
- [ ] Confirmar que cada tag carrega uma única vez (sem duplicar eventos).
- [ ] Testar os eventos `whatsapp_click`, `phone_click`, `email_click`,
      `form_start`, `form_submit` no site publicado.

## Revisão do mapa de calor (após 7 dias de Clarity)

Fazer esta revisão uma semana depois de ativar o Microsoft Clarity:

- [ ] **Scroll depth na home**: a maioria chega até a seção de Soluções e ao CTA final?
- [ ] **Cliques no CTA de WhatsApp**: quais posições convertem mais
      (header, hero, serviços, CTA final, flutuante)? Usar o `data-location` para comparar.
- [ ] **Rage clicks / dead clicks**: algum elemento parece clicável e não é?
- [ ] **Páginas de serviço**: quais recebem mais atenção? Priorizar conteúdo e Ads nelas.
- [ ] **Formulário de contato**: onde as pessoas abandonam? Campo que trava?
- [ ] **Mobile vs desktop**: diferença de comportamento que peça ajuste de layout.
- [ ] **Gravações**: assistir 5 a 10 sessões para entender dúvidas e travas reais.
- [ ] Anotar 3 ajustes priorizados e aplicar no site.
