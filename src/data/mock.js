// Mock data for Rafaela's tutoring landing page
export const mockData = {
  // Personal information
  tutor: {
    name: 'Rafaela Nascimento',
    title: 'Desenvolvedora Frontend Sênior & Mentora',
    slogan: 'Sem papo furado',
    description:
      'Pense em mim como uma guia já trilhei os caminhos difíceis da programação e agora vou ser a sua professora e mentora para que você aprenda com leveza, no seu próprio tempo.',
    careerPath: [
      'Social Media & Design',
      'UX Designer',
      'Analista de Dados',
      'Desenvolvedora Frontend',
      'Comissária de Squad',
    ],
    image:
      'https://images.unsplash.com/photo-1494790108755-2616c90a9df1?w=400&h=400&fit=crop&crop=face',
    whatsappLink:
      'https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as aulas particulares.',
  },

  // Technologies and services
  technologies: [
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
      icon: 'Code',
    },
    {
      category: 'Design',
      skills: ['Figma', 'Teoria das Cores', 'UX/UI Design'],
      icon: 'Palette',
    },
    {
      category: 'Mentoria',
      skills: ['Carreira em Tech', 'Arquitetura Clean', 'Mercado de Trabalho'],
      icon: 'Users',
    },
  ],

  // Services offered
  services: [
    {
      title: 'Aulas Particulares',
      description: 'Aulas personalizadas focadas no que realmente é usado no mercado',
      features: [
        '1 hora de duração',
        'Online via Google Meet',
        'Material didático incluso',
        'Suporte via WhatsApp',
      ],
      price: 'R$ 100,00',
      highlight: false,
    },
    {
      title: 'Aula Experimental',
      description: 'Primeira aula gratuita para nos conhecermos e verificarmos o fit cultural',
      features: [
        'Apresentação da metodologia',
        'Análise do seu perfil',
        'Planejamento personalizado',
        'Sem compromisso',
      ],
      price: 'GRÁTIS',
      highlight: true,
    },
    {
      title: 'Mentoria de Carreira',
      description: 'Orientação completa para sua transição ou crescimento em tecnologia',
      features: [
        'Planejamento de carreira',
        'Review de currículo',
        'Preparação para entrevistas',
        'Network e oportunidades',
      ],
      price: 'R$ 100,00',
      highlight: false,
    },
  ],

  // Target audience
  targetAudience: [
    {
      title: 'Mulheres na Tecnologia',
      description: 'Empoderamento feminino no setor tech com foco em representatividade',
      icon: 'Heart',
      image: '/womanWheelchair.png',
    },
    {
      title: 'Iniciantes em Programação',
      description: 'Conteúdo acessível para quem está começando do zero',
      icon: 'BookOpen',
      image: '/confusedStudent.png',
    },
    {
      title: 'Transição de Carreira',
      description: 'Suporte e orientação para profissionais mudando para TI',
      icon: 'TrendingUp',
      image: '/youngWomen.png',
    },
  ],

  // Mock testimonials (will be replaced with real ones later)
  testimonials: [
    {
      name: 'Ana Silva',
      role: 'UX Designer',
      company: 'Tech Startup',
      text: 'A Rafaela é uma profissional incrível! Acompanhei sua evolução de perto e posso dizer que ela tem uma didática natural para ensinar.',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Maria Santos',
      role: 'Desenvolvedora Frontend',
      company: 'Empresa de Tecnologia',
      text: 'Trabalhei com a Rafa por anos e ela sempre foi a pessoa que todos procuravam para tirar dúvidas. Tem uma capacidade única de explicar conceitos complexos.',
      image:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Carla Oliveira',
      role: 'Squad Leader',
      company: 'Fintech',
      text: 'A evolução da Rafaela na carreira é inspiradora. De social media a comissária de squad, ela sempre soube se reinventar e crescer.',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    },
  ],

  // Why choose me
  differentials: [
    {
      title: 'Experiência Real no Mercado',
      description: 'Atuo como Comissária de Squad em empresa de tecnologia',
      icon: 'Briefcase',
    },
    {
      title: 'Metodologia Prática',
      description: 'Foco no que realmente é usado no dia a dia profissional',
      icon: 'Target',
    },
    {
      title: 'Acompanhamento Personalizado',
      description: 'Cada aluno recebe atenção individualizada e suporte contínuo',
      icon: 'User',
    },
    {
      title: 'Networking e Oportunidades',
      description: 'Conexões no mercado para acelerar sua carreira',
      icon: 'Network',
    },
  ],

  // FAQ
  faq: [],

  // Timeline para trajetória
  timeline: {
    data: [
      {
        year: 2018,
        title: 'Telemarketing',
        subtitle: 'Itaú',
        description: 'Onde tudo começou',
        position: { desktop: { top: '75%', left: '8%' } },
      },
      {
        year: 2020,
        title: 'Social Media Designer',
        subtitle: 'Agência se virtual',
        description: 'Primeiros passos no design',
        position: { desktop: { top: '65%', left: '22%' } },
      },
      {
        year: 2021,
        title: 'Estágio Análise de Dados',
        subtitle: 'Grupo GEC',
        description: 'Mergulhando em dados',
        position: { desktop: { top: '55%', left: '36%' } },
      },
      {
        year: 2022,
        title: 'Analista de Dados 3.2',
        subtitle: 'Grupo GEC',
        description: 'Evolução na carreira',
        position: { desktop: { top: '45%', left: '50%' } },
      },
      {
        year: 2024,
        title: 'Desenvolvimento Front End 3.5',
        subtitle: 'Agência PQ',
        description: 'Transição para front-end',
        position: { desktop: { top: '35%', left: '64%' } },
      },
      {
        year: 2025,
        title: 'Desenvolvimento Front End 3.5',
        subtitle: 'Agência PQ',
        description: 'Consolidação',
        position: { desktop: { top: '30%', left: '78%' } },
      },
      {
        year: 'Hoje',
        title: 'Professora e mentora',
        subtitle: '',
        description: 'Compartilhando conhecimento',
        position: { desktop: { top: '65%', left: '90%' } },
      },
    ],
    initialMessage: {
      title: 'Início da Jornada',
      subtitle: 'Será que eu consigo? → 7 anos',
      final: 'Eu consegui!',
    },
    finalMessage: 'E quero ajudar você a conseguir também!',
  },
};
