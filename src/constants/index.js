import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  // portfolio1,
  portfolio2,
  ticktoclock,
  game,
  puzzle,
  solaire,
  maersk,
  ventures,
  resume,

} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Development',
    icon: frontend,
  },
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'maersk',
  //   icon: maersk,
  // },
  // {
  //   name: 'ventures',
  //   icon: ventures,
  // },
  // {
  //   name: 'solaire',
  //   icon: solaire,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'PO Encoder',
    company_name: 'MAERSK',
    icon: 'maersk',
    iconBg: '#333333',
    date: 'September 2024 - Present',
  },
  {
    title: 'Data Analysts',
    company_name: 'Solaire Hotel Resort and Casino',
    icon: 'solaire',
    iconBg: '#333333',
    date: 'Mar 2022 - May 2023',
  },
  {
    title: 'Website Developer',
    company_name: '917 Ventures',
    icon: 'ventures',
    iconBg: '#333333',
    date: 'January 2021 - March 2022',
  },
];

const projects = [
  // {
  //   id: 'project-1',
  //   name: 'Portfolio-v1',
  //   description: 'A Porttfolio Built with React',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'mongodb',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: portfolio1,
  //   repo: '#',
  //   demo: 'https://bernard-portfolio1.netlify.app/',
  // },
  {
    id: 'project-2',
    name: 'Portfolio',
    description:
      'My Porfolio Website Built',
    // tags: [
    //   {
    //     name: 'react',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'restapi',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'scss',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: portfolio2,
    // repo: '#',
    demo: 'https://bernardopis.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Taskmasterlist',
    description: 'This is a Task Organizer for your Daily Routines',
    // tags: [
    //   {
    //     name: 'nextjs',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'supabase',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'css',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: ticktoclock,
    // repo: '#',
    demo: 'https://taskmasterlist.netlify.app/',
  },
  {
    id: 'project-4',
    name: '3072',
    description: '3072 Game for my logical coding practice',
    // tags: [
    //   {
    //     name: 'nextjs',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'supabase',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'css',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: game,
    // repo: '#',
    demo: 'https://3072.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Puzzle Madness',
    description: 'Puzzle Game for Playground Coding Practice',
    // tags: [
    //   {
    //     name: 'nextjs',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'supabase',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'css',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: puzzle,
    // repo: '#',
    demo: 'https://puzzlemadness.netlify.app/',
  },

];

export { services, technologies, experiences, projects };
