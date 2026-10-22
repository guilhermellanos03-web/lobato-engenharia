Atualize o projeto da Lobato Engenharia usando os arquivos da pasta `public/brand`.

1. Troque por completo a logo provisória pelo arquivo oficial. No cabeçalho claro use `/brand/logo-horizontal-azul.png`. Em fundos escuros use `/brand/logo-horizontal-branca.png`. Mantenha a proporção original, não recrie a marca com texto ou SVG e não aplique sombras, gradientes ou filtros.
2. Atualize os favicons com os arquivos oficiais da pasta. Preserve os metadados, Schema.org, SEO local, eventos de conversão e links de WhatsApp que já funcionam.
3. Na primeira dobra, substitua o diagrama abstrato pela foto `/brand/hero-automacao-industrial.webp`. A foto precisa parecer parte do layout: corte horizontal, bom contraste, leve overlay azul somente se necessário e carregamento prioritário. No celular, texto primeiro e imagem logo abaixo.
4. Use `/brand/automacao-eletrica-paineis.webp` na área de automação industrial/elétrica, `/brand/automacao-predial-iot.webp` na área predial/IoT e `/brand/domotica-residencial.webp` na página de domótica. Não diga que são projetos realizados; trate como imagens editoriais que explicam o serviço.
5. Revise a responsividade em 360, 390, 768 e 1440 px. Não permita logo esmagada, texto sobreposto, rolagem horizontal, imagem excessivamente alta ou botão cortado.
6. Comprima as imagens, defina largura e altura para reduzir mudança de layout, use lazy loading fora da primeira dobra e mantenha o hero com `fetchpriority="high"`.
7. Rode o build, confira todas as páginas, publique na Vercel e informe a URL final.

Siga a identidade visual já adotada no site, mas use como referência principal o azul oficial `#006BF5`, o branco e o azul escuro de apoio. O resultado deve parecer uma empresa de engenharia real, com bastante espaço, hierarquia clara e imagens úteis. Evite aparência de template, ícones decorativos em excesso e blocos repetitivos.
