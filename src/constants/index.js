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
  // redux,
  tailwind,
  nodejs,
  git,
  figma,
  // docker,
  // postgresql,
  // rubyrails,
  // graphql,
  // komikult,
  // leaderboard,
  // math,
  // movie,
  // nyeusi,
  coverhunt,
  portfolio1,
  portfolio2,
  ticktoclock,
  // dcc,
  // kelhel,
  // microverse,
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
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
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
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
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
    title: 'FULL STACK WEB DEVELOPER',
    company_name: '197 Ventures',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Feb 2021 - March 2022',
  }
  // {
  //   title: 'Mentor (Volunteer)',
  //   company_name: 'Microverse',
  //   icon: microverse,
  //   iconBg: '#333333',
  //   date: 'Mar 2022 - May 2022',
  // },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'Portfolio-v1',
    description: 'A Porttfolio Built with React',
    // tags: [
    //   {
    //     name: 'react',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'mongodb',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'tailwind',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: portfolio1,
    // repo: '#',
    demo: 'https://bernard-portfolio1.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Portfolio-v2',
    description:
      'Porfolio design for Black Lovers',
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
    demo: 'https://opisbernard.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'TickToClock',
    description: 'This is a to-do list app built with React',
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
    demo: 'https://ticktoclock.netlify.app/',
  },
  // {
  //   id: 'project-4',
  //   name: '#',
  //   description: `#`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: '#',
  //   demo: '#',
  // },
  // {
  //   id: 'project-5',
  //   name: '#',
  //   description:
  //     '#',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: '#',
  //   demo: '#',
  // },
];

export { services, technologies, experiences, projects };
