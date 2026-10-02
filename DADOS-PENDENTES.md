# Dados pendentes de confirmação — Lobato Engenharia

Este arquivo lista tudo que precisa ser confirmado ou fornecido pelo cliente.
Nada aqui foi inventado no site. Os itens sensíveis estão ocultos por *flags*
em `src/data/site.ts` (objeto `flags`) e só aparecem quando confirmados.

## 1. Contato (prioridade alta)

- [ ] **WhatsApp**: confirmar que o número **(41) 99976-6497** recebe mensagens no WhatsApp.
      É o número exibido publicamente no LinkedIn. Está centralizado em
      `src/data/site.ts` (`phoneDigits`) e pode ser sobrescrito pela variável
      `PUBLIC_WHATSAPP` sem mexer no código. **Não publicar número diferente** sem confirmar.
- [ ] **E-mail**: confirmar que `contato@lobatoengenharia.com.br` está ativo.
- [ ] Existe telefone fixo além do celular? Hoje só o celular é usado.

## 2. Dados cadastrais

- [ ] **CNPJ 49.963.814/0001-10**: confirmar que pertence à operação atual.
      Enquanto não confirmado, não aparece no site. Para exibir: `flags.showCnpj = true`.
- [ ] **Razão social**: `Lobato Engenharia & Sistemas de Automação LTDA` é provável. Confirmar.
- [ ] **Fundação em 2018**: confirmar para poder publicar "atuação desde 2018".
      Para exibir: `flags.showFounded = true`.
- [ ] **Endereço completo**: não publicado. Informar se quiser exibir (bom para SEO local
      e Google Meu Negócio).
- [ ] **Área de atendimento**: além de Curitiba, atende outras cidades/estados? O texto
      atual diz apenas que a sede é em Curitiba e que outras cidades são avaliadas no contato.

## 3. Identidade visual

- [ ] **Logo oficial**: o logo atual é **provisório** (marca tipográfica + glifo de
      integração, em `src/components/Logo.astro`). Enviar o logo oficial em SVG ou PNG
      com fundo transparente. O favicon e a imagem OG também foram gerados a partir
      desse glifo provisório e devem ser atualizados junto.

## 4. Prova social (seções ocultas até haver material real)

- [ ] **Cases / projetos**: nenhum case fictício foi criado. A seção de projetos fica
      **oculta** (`flags.showProjects = false`) até haver cases reais e autorizados.
      Cada case aceita: segmento, problema, solução, tecnologias, resultado comprovado,
      fotos reais e autorização de divulgação.
- [ ] **Depoimentos** e **avaliações do Google**: ocultos (`flags.showReviews = false`)
      até haver conteúdo real. Não usar logotipos de clientes sem autorização.
- [ ] **Fotos reais** (painéis, indústria, equipe): substituir o visual abstrato do site
      por fotos reais quando disponíveis. Hoje não há foto de banco apresentada como
      projeto executado pela Lobato.

## 5. Domínio e Google

- [ ] **Domínio `lobatoengenharia.com.br`**: não está resolvendo. Enquanto isso o site
      roda na URL da Vercel e o canonical aponta para ela. Ao liberar o DNS, conectar o
      domínio na Vercel e definir `PUBLIC_SITE_URL=https://www.lobatoengenharia.com.br`,
      atualizando canonical, sitemap, robots e Open Graph (ver README).
- [ ] **Google Search Console**: criar/verificar a propriedade quando o domínio estiver
      ativo e enviar o sitemap.
- [ ] **Google Meu Negócio**: manter nome, telefone e cidade idênticos aos do site.

## 6. Analytics e rastreamento (sem IDs fictícios)

Nenhum pixel foi instalado. Preencher no `.env` (ou nas variáveis da Vercel) quando o
cliente fornecer. Os eventos de conversão (`whatsapp_click`, `phone_click`,
`email_click`, `form_start`, `form_submit`) já estão preparados e disparam
automaticamente se o GA4 / Meta Pixel estiverem configurados.

- [ ] `PUBLIC_GA4_ID` (Google Analytics 4)
- [ ] `PUBLIC_GOOGLE_ADS_ID` (Google Ads)
- [ ] `PUBLIC_CLARITY_ID` (Microsoft Clarity)
- [ ] `PUBLIC_META_PIXEL_ID` (Meta Pixel)
- [ ] `PUBLIC_GSC_VERIFICATION` (verificação do Search Console)

## 7. Jurídico

- [ ] **Política de Privacidade**: texto base pronto em `/politica-de-privacidade/`.
      Recomenda-se revisão jurídica e inclusão dos dados do controlador (razão social,
      CNPJ e, se desejado, encarregado/DPO) após confirmação.
