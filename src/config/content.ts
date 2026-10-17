/** Todos os textos da página. Edite aqui sem tocar nos componentes. */

export const NAV_LINKS = [
  { label: "Solução", href: "#demo" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

export const HERO = {
  eyebrow: "INTELIGÊNCIA ARTIFICIAL PARA EMPRESAS",
  title: ["Seu atendimento.", "Em um novo nível."],
  highlight: "novo nível",
  subtitle:
    "A Novyra AI ajuda sua empresa a automatizar tarefas de atendimento pelo WhatsApp, responder dúvidas frequentes e organizar conversas com mais inteligência.",
  primaryCta: "QUERO CONHECER A NOVYRA AI",
  secondaryCta: "VER COMO FUNCIONA",
  note: "Automação inteligente, com espaço para o atendimento humano.",
  videoLabel: "Animação de abertura da marca Novyra AI.",
};

export const DEMO = {
  eyebrow: "DEMONSTRAÇÃO",
  title: "Veja a inteligência em ação.",
  text: "Uma experiência de atendimento organizada para responder dúvidas recorrentes e orientar cada conversa de acordo com as informações configuradas.",
  badge: "Simulação ilustrativa",
  disclaimer:
    "Esta é uma simulação local. Nenhuma mensagem é enviada, nenhum dado é solicitado e você não está falando com a IA de produção.",
  start: "Experimentar demonstração",
  running: "Simulação em andamento…",
  statusIdle: "Pronta para iniciar",
  statusRunning: "Simulação em andamento",
  statusDone: "Conversa concluída",
  restart: "Ver novamente",
  empty: "Pressione “Experimentar demonstração” para ver uma conversa de exemplo.",
  script: [
    { from: "client", text: "Olá! Gostaria de saber mais sobre os serviços." },
    { from: "assistant", text: "Olá! Posso ajudar você a conhecer os serviços e orientar os próximos passos." },
    { from: "client", text: "Consigo falar com uma pessoa?" },
    { from: "assistant", text: "Sim. Posso orientar você sobre como entrar em contato com a equipe." },
  ] as { from: "client" | "assistant"; text: string }[],
};

export const PROBLEM = {
  eyebrow: "O DESAFIO",
  title: ["Mais organização.", "Menos tarefas repetitivas."],
  situations: [
    "Perguntas frequentes que precisam ser respondidas repetidamente.",
    "Conversas que precisam ser organizadas.",
    "Solicitações que exigem encaminhamento para a equipe.",
    "Tempo gasto com tarefas operacionais.",
  ],
  support:
    "Nem toda tarefa de atendimento precisa começar do zero. Com uma automação bem configurada, determinadas etapas podem ser simplificadas, respeitando os limites da tecnologia e as necessidades da sua empresa.",
};

export const BENEFITS = {
  eyebrow: "BENEFÍCIOS",
  title: "Tecnologia que trabalha a favor da sua operação.",
  items: [
    {
      title: "Respostas a dúvidas frequentes",
      text: "Ajude a automatizar respostas recorrentes com base nas informações configuradas para o negócio.",
    },
    {
      title: "Atendimento mais organizado",
      text: "Estruture o fluxo inicial de conversas e facilite o encaminhamento das solicitações.",
    },
    {
      title: "Mais tempo para a equipe",
      text: "Reduza a necessidade de digitar manualmente determinadas respostas repetitivas.",
    },
    {
      title: "Experiência alinhada ao negócio",
      text: "Configure instruções e informações de acordo com a linguagem e os processos da empresa.",
    },
  ],
};

export const HOW = {
  eyebrow: "COMO FUNCIONA",
  title: "Simples de entender. Pensado para sua empresa.",
  steps: [
    {
      title: "Entenda suas necessidades",
      text: "Identificamos as tarefas de atendimento que podem ser automatizadas.",
    },
    {
      title: "Configure a solução",
      text: "A automação é organizada com as informações, instruções e processos relevantes para a empresa.",
    },
    {
      title: "Organize o atendimento",
      text: "A solução pode responder dúvidas recorrentes e orientar o encaminhamento de conversas conforme as funcionalidades configuradas.",
    },
  ],
};

export const SEGMENTS = {
  eyebrow: "APLICAÇÕES",
  title: "Uma experiência que pode se adaptar ao seu negócio.",
  note: "Exemplos ilustrativos de uso. A aplicação depende da configuração e dos recursos disponíveis.",
  items: [
    {
      id: "comercio",
      label: "Comércio e lojas",
      question: "Qual o horário de funcionamento da loja?",
      uses: [
        "Responder dúvidas frequentes sobre produtos e atendimento.",
        "Informar horários de funcionamento.",
        "Orientar o cliente sobre os próximos passos.",
      ],
    },
    {
      id: "servicos",
      label: "Prestadores de serviços",
      question: "Quais serviços vocês oferecem?",
      uses: [
        "Explicar os serviços oferecidos pela empresa.",
        "Organizar as informações iniciais de uma solicitação.",
        "Encaminhar o contato para a equipe.",
      ],
    },
    {
      id: "restaurantes",
      label: "Restaurantes",
      question: "Vocês abrem aos domingos?",
      uses: [
        "Informar horários e dias de funcionamento.",
        "Responder dúvidas frequentes sobre o cardápio.",
        "Orientar como fazer um pedido ou uma reserva.",
      ],
    },
    {
      id: "clinicas",
      label: "Clínicas e consultórios",
      question: "Como posso falar com a recepção?",
      uses: [
        "Informar horários e endereço de atendimento.",
        "Responder dúvidas administrativas frequentes.",
        "Orientar o contato com a recepção ou a equipe.",
      ],
      caution: "Uso administrativo. A automação não oferece aconselhamento médico.",
    },
    {
      id: "orcamentos",
      label: "Empresas que trabalham com orçamentos",
      question: "Como faço para pedir um orçamento?",
      uses: [
        "Explicar como solicitar um orçamento.",
        "Organizar as informações necessárias para a solicitação.",
        "Encaminhar o pedido para a equipe responsável.",
      ],
    },
  ] as { id: string; label: string; question: string; uses: string[]; caution?: string }[],
};

export const DIFFERENTIAL = {
  eyebrow: "DIFERENCIAL",
  title: "Automação com propósito. Atendimento com contexto.",
  text: "Uma automação útil não consiste apenas em enviar respostas automáticas. Ela precisa:",
  requirements: [
    "Considerar o contexto da conversa.",
    "Utilizar informações corretas.",
    "Ter instruções claras.",
    "Reconhecer quando não sabe responder.",
    "Permitir encaminhamento para a equipe quando necessário.",
  ],
  message: "A tecnologia deve apoiar o atendimento, não criar uma experiência fria ou confusa.",
  aiLabel: "Automação",
  aiNote: "Não encontrei essa informação. Vou encaminhar para a equipe.",
  humanLabel: "Equipe",
  humanNote: "Olá! Assumo a conversa a partir daqui.",
  illustrative: "Ilustração conceitual",
};

export const OFFER = {
  eyebrow: "OFERTA ESPECIAL",
  title: "Uma condição especial para começar.",
  leadTitle: "Automatize seu atendimento com inteligência.",
  leadText:
    "Organize conversas, responda dúvidas frequentes e simplifique tarefas repetitivas com uma automação configurada para as necessidades do seu negócio.",
  badge: "SOMENTE PARA A PRIMEIRA CONTRATAÇÃO",
  cta: "QUERO CONTRATAR POR {{price}}",
  legal: "Oferta destinada à primeira contratação. Conheça a solução e consulte as condições comerciais aplicáveis.",
  videoLabel: "Apresentação animada da Novyra AI: atendimento pelo WhatsApp e oferta de primeira contratação.",
  videoCaption: "Apresentação ilustrativa",
};

export const FAQ = {
  eyebrow: "DÚVIDAS",
  title: "Perguntas frequentes.",
  items: [
    {
      id: "o-que-e",
      q: "O que é a Novyra AI?",
      a: "A Novyra AI oferece soluções de inteligência artificial e automação para ajudar empresas a organizar o atendimento, responder dúvidas frequentes e orientar conversas pelo WhatsApp.",
    },
    {
      id: "substitui",
      q: "A automação substitui os atendentes?",
      a: "Não necessariamente. A automação pode apoiar a equipe com tarefas repetitivas e encaminhar situações específicas para atendimento humano, conforme a configuração.",
    },
    {
      id: "personalizar",
      q: "Posso personalizar o atendimento?",
      a: "A automação pode ser configurada com informações e instruções relacionadas à empresa, dentro dos recursos disponíveis.",
    },
    {
      id: "erros",
      q: "A IA pode cometer erros?",
      a: "Sim. Por isso, é importante utilizar informações corretas, testar a solução e definir situações em que a equipe humana deve assumir a conversa.",
    },
    {
      id: "contratacao",
      q: "Como funciona a contratação?",
      a: "Você pode utilizar o botão de contratação para acessar o checkout oficial e consultar as condições apresentadas no momento da compra.",
    },
    {
      id: "oferta",
      q: "A oferta de {{price}} é para todos os clientes?",
      a: "Essa condição foi definida para a primeira contratação. A elegibilidade deve seguir as condições comerciais aplicáveis.",
    },
    {
      id: "adequada",
      q: "Como sei se a solução é adequada para minha empresa?",
      a: "O ideal é avaliar as necessidades do seu atendimento e verificar se os recursos disponíveis atendem aos processos da sua empresa.",
    },
    {
      id: "integracoes",
      q: "Quais integrações estão disponíveis?",
      a: "As integrações dependem da configuração e dos recursos oferecidos. Consulte a equipe responsável para confirmar a compatibilidade com os sistemas utilizados pela sua empresa.",
    },
  ],
};

export const FINAL = {
  title: "Seu atendimento pode evoluir.",
  subtitle:
    "Descubra como a inteligência artificial pode ajudar sua empresa a organizar conversas e simplificar tarefas de atendimento.",
  cta: "QUERO CONHECER A NOVYRA AI",
  signature: "NOVYRA AI — Ideias inteligentes. Resultados reais.",
};
