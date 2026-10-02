// ===================================================================
// Lobato Engenharia & Sistemas de Automacao - dados centralizados
// Fonte unica de verdade para contatos, textos, servicos, FAQ e flags.
// Dados nao confirmados ficam atras de flags (ver DADOS-PENDENTES.md).
// ===================================================================

export const site = {
  name: 'Lobato Engenharia & Sistemas de Automação',
  shortName: 'Lobato Engenharia',
  legalName: 'Lobato Engenharia & Sistemas de Automação LTDA', // PROVAVEL - confirmar
  city: 'Curitiba',
  region: 'PR',
  regionName: 'Paraná',
  country: 'BR',

  // CONTATOS -----------------------------------------------------------
  // Numero candidato a WhatsApp. PENDENTE confirmar que recebe mensagens.
  phoneDisplay: '(41) 99976-6497',
  phoneIntl: '+55 41 99976-6497',
  phoneDigits: '5541999766497',
  email: 'contato@lobatoengenharia.com.br',
  linkedin:
    'https://www.linkedin.com/company/lobato-engenharia-sistemas-de-automa%C3%A7%C3%A3o/',

  // Dominio final (ainda nao resolve). Canonical real vem de PUBLIC_SITE_URL.
  finalDomain: 'https://www.lobatoengenharia.com.br',

  // Dados sensiveis - so aparecem se a flag correspondente for true
  foundedYear: 2018, // exibir so se flags.showFounded
  cnpj: '49.963.814/0001-10', // exibir so se flags.showCnpj
} as const;

// Controle de exibicao de dados nao confirmados -----------------------
export const flags = {
  showCnpj: false, // confirmar que o CNPJ pertence a operacao atual
  showFounded: false, // confirmar "atuacao desde 2018"
  showProjects: false, // sem cases autorizados: secao oculta
  showReviews: false, // sem avaliacoes reais: seccao oculta
  whatsappConfirmed: false, // confirmar que o numero recebe WhatsApp
} as const;

// WhatsApp ------------------------------------------------------------
const WHATSAPP = (import.meta.env.PUBLIC_WHATSAPP as string) || site.phoneDigits;

export const waMessageBase =
  'Olá, encontrei a Lobato pelo site e gostaria de conversar sobre um projeto. Empresa: [nome da empresa]. Tipo de solução: [automação industrial, predial, IoT, elétrica, TI ou outra]. Cidade: [cidade].';

export function waMessageFor(solution?: string): string {
  if (!solution) return waMessageBase;
  return `Olá, encontrei a Lobato pelo site e gostaria de conversar sobre um projeto de ${solution}. Empresa: [nome da empresa]. Cidade: [cidade].`;
}

export function waLink(solution?: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMessageFor(solution))}`;
}

// Navegacao -----------------------------------------------------------
export const nav = [
  { label: 'Início', href: '/' },
  { label: 'Soluções', href: '/servicos/' },
  { label: 'Como trabalhamos', href: '/#como-trabalhamos' },
  { label: 'Sobre', href: '/sobre/' },
  { label: 'Contato', href: '/contato/' },
];

// Servicos ------------------------------------------------------------
export interface Service {
  slug: string;
  icon: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  problem: string;
  scope: string[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'automacao-industrial',
    icon: 'factory',
    title: 'Automação Industrial',
    short:
      'Projetos voltados à integração, controle e acompanhamento de processos industriais.',
    metaTitle: 'Automação Industrial em Curitiba | Lobato Engenharia',
    metaDescription:
      'Projetos de automação industrial em Curitiba: integração, controle e acompanhamento de processos. Fale com a Lobato Engenharia pelo WhatsApp.',
    h1: 'Automação industrial em Curitiba',
    eyebrow: 'Soluções industriais',
    intro:
      'A Lobato desenvolve projetos de automação industrial voltados à integração, ao controle e ao acompanhamento de processos produtivos. O escopo é definido a partir da análise da operação, dos equipamentos existentes e dos objetivos de cada projeto.',
    problem:
      'Equipamentos que operam de forma isolada, controles manuais e falta de dados em tempo real tornam a produção menos previsível. A automação conecta esses pontos e organiza as informações do processo.',
    scope: [
      'Levantamento técnico do processo e dos equipamentos',
      'Integração de máquinas, sensores e controles',
      'Painéis e lógica de controle conforme o projeto',
      'Coleta e organização de dados de operação',
      'Documentação técnica da solução entregue',
    ],
    outcomes: [
      'Processos mais previsíveis e acompanhados de perto',
      'Informação centralizada para apoiar decisões',
      'Base preparada para evoluir para IoT e Indústria 4.0',
    ],
    faqs: [
      {
        q: 'A Lobato atende qual porte de indústria?',
        a: 'O atendimento é avaliado caso a caso, a partir da necessidade e da estrutura existente. Envie uma descrição pelo WhatsApp para uma análise inicial.',
      },
      {
        q: 'É possível integrar equipamentos de fabricantes diferentes?',
        a: 'A viabilidade depende dos equipamentos e dos protocolos disponíveis. Esse levantamento faz parte da etapa de entendimento do projeto.',
      },
    ],
    related: ['iot-industria-4-0', 'eletrica-predial', 'ti-telecomunicacoes'],
  },
  {
    slug: 'automacao-predial',
    icon: 'building',
    title: 'Automação Predial',
    short:
      'Soluções para integrar sistemas e facilitar o controle de ambientes e instalações.',
    metaTitle: 'Automação Predial em Curitiba | Lobato Engenharia',
    metaDescription:
      'Integração de sistemas prediais para controle de ambientes e instalações em Curitiba. Fale com a Lobato Engenharia.',
    h1: 'Automação predial em Curitiba',
    eyebrow: 'Soluções prediais',
    intro:
      'Soluções para integrar sistemas prediais e facilitar o controle de ambientes, instalações e rotinas de operação. Indicado para empresas, condomínios e empreendimentos comerciais.',
    problem:
      'Sistemas prediais que funcionam separadamente exigem controle manual e dificultam a gestão do dia a dia. A integração reúne esses sistemas em uma operação mais organizada.',
    scope: [
      'Análise das instalações e dos sistemas existentes',
      'Integração de iluminação, acesso e demais sistemas prediais',
      'Centralização de controle e monitoramento',
      'Organização das rotinas de operação do edifício',
      'Documentação da solução entregue',
    ],
    outcomes: [
      'Controle centralizado dos sistemas do prédio',
      'Operação mais organizada para equipes e administração',
      'Infraestrutura preparada para novas necessidades',
    ],
    faqs: [
      {
        q: 'Serve para condomínios já em operação?',
        a: 'Sim. A solução é avaliada de acordo com os sistemas já instalados e os objetivos do empreendimento.',
      },
      {
        q: 'A automação predial inclui parte elétrica?',
        a: 'Quando necessário, o projeto considera a elétrica predial de forma integrada. Esse ponto é definido no levantamento.',
      },
    ],
    related: ['eletrica-predial', 'domotica', 'iot-industria-4-0'],
  },
  {
    slug: 'domotica',
    icon: 'home',
    title: 'Domótica',
    short:
      'Automação de ambientes residenciais com foco em praticidade, integração e experiência de uso.',
    metaTitle: 'Domótica e Automação Residencial em Curitiba | Lobato',
    metaDescription:
      'Automação residencial com foco em praticidade, integração e experiência de uso em Curitiba. Fale com a Lobato Engenharia.',
    h1: 'Domótica em Curitiba',
    eyebrow: 'Automação residencial',
    intro:
      'Automação de ambientes residenciais com foco em praticidade, integração e experiência de uso. O projeto parte do estilo de uso da casa e das preferências dos moradores.',
    problem:
      'Vários controles separados para iluminação, climatização e segurança tornam o uso da casa mais trabalhoso. A domótica reúne esses comandos de forma simples.',
    scope: [
      'Conversa sobre o uso dos ambientes e as prioridades',
      'Integração de iluminação, climatização e cenários',
      'Controle centralizado por painel ou aplicativo',
      'Previsão de expansão para novos ambientes',
      'Orientação de uso após a entrega',
    ],
    outcomes: [
      'Uso mais prático dos ambientes',
      'Comandos integrados em um só lugar',
      'Projeto preparado para crescer com a casa',
    ],
    faqs: [
      {
        q: 'Dá para automatizar só uma parte da casa?',
        a: 'Sim. O projeto pode começar por ambientes ou funções específicas e evoluir depois.',
      },
      {
        q: 'Funciona em casa já construída?',
        a: 'A viabilidade é avaliada conforme a infraestrutura existente, na etapa de entendimento.',
      },
    ],
    related: ['automacao-predial', 'iot-industria-4-0', 'eletrica-predial'],
  },
  {
    slug: 'iot-industria-4-0',
    icon: 'network',
    title: 'IoT e Indústria 4.0',
    short:
      'Conexão de equipamentos, dados e sistemas para ampliar a visibilidade dos processos.',
    metaTitle: 'IoT e Indústria 4.0 em Curitiba | Lobato Engenharia',
    metaDescription:
      'Conexão de equipamentos, dados e sistemas para ampliar a visibilidade dos processos. IoT industrial em Curitiba com a Lobato Engenharia.',
    h1: 'IoT e Indústria 4.0',
    eyebrow: 'Dados e conectividade',
    intro:
      'Conexão de equipamentos, dados e sistemas para ampliar a visibilidade dos processos. O objetivo é transformar dados dispersos em informação útil para a operação.',
    problem:
      'Dados que ficam presos em cada equipamento dificultam enxergar o processo como um todo. A abordagem de IoT conecta esses pontos e organiza a informação.',
    scope: [
      'Mapeamento das fontes de dados e dos equipamentos',
      'Conexão de sensores e dispositivos',
      'Centralização e organização dos dados',
      'Painéis de acompanhamento conforme a necessidade',
      'Integração com os sistemas já utilizados',
    ],
    outcomes: [
      'Mais visibilidade sobre o processo',
      'Dados organizados para apoiar decisões',
      'Evolução gradual rumo à Indústria 4.0',
    ],
    faqs: [
      {
        q: 'Preciso trocar meus equipamentos?',
        a: 'Nem sempre. Parte dos equipamentos pode ser integrada conforme os recursos disponíveis. Isso é avaliado no levantamento.',
      },
      {
        q: 'Por onde começar?',
        a: 'Normalmente por um escopo inicial, com as fontes de dados mais relevantes, que depois pode ser expandido.',
      },
    ],
    related: ['automacao-industrial', 'ti-telecomunicacoes', 'automacao-predial'],
  },
  {
    slug: 'eletrica-predial',
    icon: 'bolt',
    title: 'Elétrica Predial',
    short:
      'Planejamento e execução de soluções elétricas alinhadas à necessidade do empreendimento.',
    metaTitle: 'Elétrica Predial em Curitiba | Lobato Engenharia',
    metaDescription:
      'Planejamento e execução de soluções elétricas prediais alinhadas ao empreendimento, em Curitiba. Fale com a Lobato Engenharia.',
    h1: 'Elétrica predial em Curitiba',
    eyebrow: 'Infraestrutura elétrica',
    intro:
      'Planejamento e execução de soluções elétricas alinhadas à necessidade do empreendimento. A elétrica é tratada como base para automação e integração de sistemas.',
    problem:
      'Instalações elétricas que não acompanham o crescimento do empreendimento geram limitações e retrabalho. O planejamento adequado evita esse tipo de problema.',
    scope: [
      'Análise da necessidade e das condições do local',
      'Planejamento da solução elétrica do projeto',
      'Execução alinhada ao planejamento',
      'Preparação para automação e novos sistemas',
      'Documentação da entrega',
    ],
    outcomes: [
      'Base elétrica adequada ao uso do empreendimento',
      'Infraestrutura preparada para automação',
      'Menos limitações para evoluir depois',
    ],
    faqs: [
      {
        q: 'A elétrica vem junto com a automação?',
        a: 'Pode vir. Em muitos projetos a elétrica e a automação são planejadas de forma integrada.',
      },
      {
        q: 'Atende obra nova e reforma?',
        a: 'A viabilidade é avaliada conforme o estágio da obra e as condições do local.',
      },
    ],
    related: ['automacao-predial', 'automacao-industrial', 'ti-telecomunicacoes'],
  },
  {
    slug: 'ti-telecomunicacoes',
    icon: 'server',
    title: 'TI e Telecomunicações',
    short:
      'Infraestrutura e integração para comunicação, conectividade e suporte aos sistemas.',
    metaTitle: 'TI e Telecomunicações para Empresas em Curitiba | Lobato',
    metaDescription:
      'Infraestrutura e integração para comunicação, conectividade e suporte aos sistemas em Curitiba. Fale com a Lobato Engenharia.',
    h1: 'TI e telecomunicações para empresas',
    eyebrow: 'Infraestrutura e conectividade',
    intro:
      'Infraestrutura e integração para comunicação, conectividade e suporte aos sistemas. É a base que mantém automação, dados e operação conectados.',
    problem:
      'Conectividade instável e infraestrutura sem planejamento comprometem sistemas e automação. Uma base de TI organizada sustenta o restante da operação.',
    scope: [
      'Levantamento da infraestrutura e das necessidades',
      'Planejamento de rede e conectividade',
      'Integração com os sistemas da operação',
      'Organização da infraestrutura de comunicação',
      'Documentação da solução',
    ],
    outcomes: [
      'Conectividade mais estável para a operação',
      'Infraestrutura organizada e documentada',
      'Suporte à automação e aos dados',
    ],
    faqs: [
      {
        q: 'Atende empresas de qual porte?',
        a: 'O atendimento é avaliado conforme a necessidade e a estrutura atual. Fale pelo WhatsApp para uma análise inicial.',
      },
      {
        q: 'Integra com automação e IoT?',
        a: 'Sim. A infraestrutura de TI costuma ser a base para automação, IoT e integração de sistemas.',
      },
    ],
    related: ['iot-industria-4-0', 'automacao-industrial', 'automacao-predial'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

// Processo (home) -----------------------------------------------------
export const process = [
  {
    n: '01',
    title: 'Entendimento da necessidade',
    desc: 'Levantamento do cenário, dos objetivos e das restrições do projeto.',
  },
  {
    n: '02',
    title: 'Planejamento da solução',
    desc: 'Definição da abordagem técnica, escopo e etapas necessárias.',
  },
  {
    n: '03',
    title: 'Execução e integração',
    desc: 'Implementação alinhada ao planejamento e às condições do ambiente.',
  },
  {
    n: '04',
    title: 'Validação e entrega',
    desc: 'Verificação da solução e organização das informações do projeto.',
  },
];

// Problemas (home) ----------------------------------------------------
export const problems = [
  'Equipamentos e sistemas sem integração',
  'Processos manuais ou repetitivos',
  'Falta de visibilidade operacional',
  'Infraestrutura que precisa acompanhar o crescimento',
  'Dificuldade para centralizar informações',
];

// Publico (home) ------------------------------------------------------
export const audience = [
  { icon: 'factory', label: 'Gestores industriais e de manutenção' },
  { icon: 'gauge', label: 'Engenharia e facilities' },
  { icon: 'building', label: 'Construtoras e escritórios de arquitetura' },
  { icon: 'buildings', label: 'Condomínios e empreendimentos comerciais' },
  { icon: 'network', label: 'Operações com sistemas sem integração' },
  { icon: 'home', label: 'Projetos residenciais de domótica' },
];

// Diferenciais (sobre) ------------------------------------------------
export const differentials = [
  'Visão integrada do projeto',
  'Atendimento consultivo',
  'Soluções adaptadas ao cenário',
  'Comunicação técnica clara',
  'Integração entre engenharia e tecnologia',
];

// FAQ (home) ----------------------------------------------------------
export const faqs = [
  {
    q: 'Quais tipos de projeto a Lobato desenvolve?',
    a: 'A Lobato apresenta soluções em automação industrial, automação predial, domótica, IoT, Indústria 4.0, elétrica predial, TI e telecomunicações. O escopo é definido depois da análise da necessidade.',
  },
  {
    q: 'Como solicitar uma avaliação?',
    a: 'Envie pelo WhatsApp uma descrição do projeto, a cidade, o tipo de instalação e, se possível, fotos ou documentos iniciais.',
  },
  {
    q: 'As soluções são personalizadas?',
    a: 'O escopo é avaliado de acordo com a estrutura existente, os objetivos e as condições de cada projeto.',
  },
  {
    q: 'A Lobato atende projetos industriais e prediais?',
    a: 'Sim. A empresa apresenta atuação em automação industrial e predial, além de elétrica, IoT, TI, telecomunicações e domótica.',
  },
  {
    q: 'Qual é a área de atendimento?',
    a: 'A Lobato está sediada em Curitiba. A disponibilidade para outras cidades deve ser confirmada durante o contato.',
  },
  {
    q: 'Quais informações devo enviar para pedir um orçamento?',
    a: 'Informe sua empresa, cidade, tipo de solução, situação atual e objetivo do projeto.',
  },
];
