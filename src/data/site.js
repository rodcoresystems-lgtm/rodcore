// Dados de referência. Itens marcados com CONFIRMAR devem ser validados antes da publicação.
export const SITE = {
  name: 'Dra. Rozangela Gomes',
  tagline: 'ESTÉTICA AVANÇADA',
  credential: 'Biomédica Esteta | CRBM 29583',
  phoneLabel: '(64) 98131-9095',
  whatsappNumber: '5564981319095',
  instagram: 'https://www.instagram.com/rozangela_gomes__estetica/',
  instagramHandle: '@rozangela_gomes_estetica',
  address: {
    lines: ['Rua C, Quadra 37, Lote 8', 'Bairro Nova Vila', 'Caldas Novas - GO'],
    mapQuery: '-17.7471467,-48.619075',
  },
};

export const DEFAULT_MESSAGE = 'Olá! Gostaria de conhecer os tratamentos e agendar uma avaliação.';

export const whatsappLink = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const NAV = [
  { href: '#inicio', label: 'Início' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#sobre', label: 'Sobre a Dra. Rozangela' },
  { href: '#bem-estar', label: 'Cuidado e Bem-Estar' },
  { href: '#contato', label: 'Contato' },
];

// Descrições sem promessas de resultado: apenas o que o procedimento é, de forma geral.
// CONFIRMAR: textos originais da clínica para cada tratamento (não havia arquivos disponíveis).
// Para usar foto real, informe `image: '/images/arquivo.jpg'`.
export const TREATMENTS = [
  {
    id: 'limpeza-de-pele',
    name: 'Limpeza de Pele',
    category: 'Cuidados faciais',
    icon: 'sparkles',
    image: '/images/limpeza-de-pele.jpg',
    imageAlt: 'Profissional realizando limpeza de pele no rosto de uma cliente com discos de algodão',
    description: 'Cuidado facial realizado após avaliação profissional, de acordo com o tipo e as necessidades da sua pele.',
  },
  {
    id: 'lipo-enzimatica',
    name: 'Lipo Enzimática',
    category: 'Contorno corporal',
    icon: 'activity',
    image: '/images/lipo-enzimatica.jpg',
    imageAlt: 'Aparelho estético sendo aplicado no abdômen durante um atendimento de estética corporal',
    description: 'Procedimento de estética corporal indicado somente após avaliação individual com a profissional.',
  },
  {
    id: 'microagulhamento',
    name: 'Microagulhamento',
    category: 'Renovação da pele',
    icon: 'layers',
    image: '/images/microagulhamento.jpg',
    imageAlt: 'Caneta de microagulhamento sendo aplicada no rosto de uma cliente',
    description: 'Tratamento voltado à renovação da pele, com indicação e protocolo definidos em avaliação.',
  },
  {
    id: 'lipo-sem-corte',
    name: 'Lipo Sem Corte',
    category: 'Contorno corporal',
    icon: 'circle-dot',
    image: '/images/lipo-sem-corte.jpg',
    imageAlt: 'Aparelho de estética corporal sendo aplicado no abdômen de uma cliente',
    description: 'Opção de estética corporal sem procedimento cirúrgico, avaliada de forma individualizada.',
  },
  {
    id: 'radiofrequencia',
    name: 'Radiofrequência Facial e Corporal',
    category: 'Tecnologia estética',
    icon: 'zap',
    image: '/images/radiofrequencia.jpg',
    imageAlt: 'Aparelho de radiofrequência sendo aplicado no rosto de uma cliente',
    description: 'Tecnologia estética aplicada ao rosto e ao corpo, conforme o objetivo e a avaliação de cada pessoa.',
  },
  {
    id: 'peeling-de-diamante',
    name: 'Peeling de Diamante com Radiofrequência',
    category: 'Renovação da pele',
    icon: 'gem',
    image: '/images/peeling-de-diamante.jpg',
    imageAlt: 'Ponteira de peeling sendo aplicada no rosto de uma cliente com toalha na cabeça',
    description: 'Combinação de técnicas para cuidado e renovação da pele, indicada após avaliação profissional.',
  },
  {
    id: 'drenagem-linfatica',
    name: 'Drenagem Linfática',
    category: 'Estética corporal',
    icon: 'droplets',
    image: '/images/drenagem-linfatica.jpg',
    imageAlt: 'Massagem de drenagem linfática manual realizada na perna de uma cliente',
    description: 'Técnica manual de estética corporal que une cuidado e bem-estar, com atendimento individualizado.',
  },
];

export const WELLNESS = [
  { icon: 'heart-handshake', title: 'Atendimento acolhedor', text: 'Você é recebida com atenção, escuta e respeito desde o primeiro contato.' },
  { icon: 'user-round', title: 'Atenção individualizada', text: 'Cada pessoa é única, e o atendimento considera suas características e necessidades.' },
  { icon: 'clipboard-check', title: 'Avaliação profissional', text: 'Os cuidados são indicados após avaliação, com orientação clara sobre as possibilidades.' },
  { icon: 'flower-2', title: 'Ambiente para o bem-estar', text: 'Um espaço pensado para você dedicar um momento especial a si mesma.' },
  { icon: 'scale', title: 'Respeito aos seus objetivos', text: 'Seus objetivos e limites são a referência para cada recomendação.' },
];
