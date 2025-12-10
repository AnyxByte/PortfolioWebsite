import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project2.png',
    title: 'SlangZone',
    description:
      'A real-time chat application built using React.js, Express.js, and Socket.io, with modern styling and UI components.',
    technologies: [
      'React.js',
      'Express.js',
      'Socket.io',
      'Shadcn/ui',
      'Tailwind',
      'MongoDB',
      'Node.js',
    ],
    links: {
      preview: 'https://real-time-chatting-application-delta.vercel.app/', // replace with your deployed chat app link
      github: 'https://github.com/AnyxByte/real-time-chatting-application', // replace with your repo link
    },
  },
  {
    image: '/images/project1.png',
    title: 'BlogIpsum',
    description:
      'A full-stack blogging application built with Next.js and Nest.js, featuring modern UI and database integration.',
    technologies: [
      'React.js',
      'Express.js',
      'Shadcn/ui',
      'Tailwind',
      'MongoDB',
      'Node.js',
    ],
    links: {
      preview: 'https://blogging-frontend-blue.vercel.app/',
      github: 'https://github.com/AnyxByte/blogging-frontend',
    },
  },
  {
    image: '/images/project3.png',
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects and skills, built with Next.js and styled using Tailwind CSS and Shadcn/ui.',
    technologies: [
      'Next.js',
      'Tailwind',
      'Shadcn/ui',
      'TypeScript',
      'React.js',
    ],
    links: {
      preview: 'https://portfolio-website-tau-one-82.vercel.app/', // replace with your actual portfolio link
      github: 'https://github.com/AnyxByte/PortfolioWebsite', // replace with your repo link
    },
  },
  {
    image: '/images/project4.png',
    title: 'AI Note-Taking App',
    description:
      'An AI-powered note-taking application built with Next.js, integrated with Gemini APIs, and deployed on Vercel.',
    technologies: [
      'Next.js',
      'Tailwind',
      'Shadcn/ui',
      'Gemini AI API',
      'MongoDB',
    ],
    links: {
      preview: 'https://ai-note-taking-app-xi.vercel.app/', // your live app link
      github: 'https://github.com/AnyxByte/AI-Note-Taking-App', // replace with your repo link
    },
  },
  {
    image: '/images/project5.png',
    title: 'Real-Time Multiplayer Quiz App',
    description:
      'A fast, real-time multiplayer quiz platform built with WebSockets and Redis, featuring room-based gameplay, live scoring, and JWT-secured access.',
    technologies: [
      'Node.js',
      'Express.js',
      'WebSockets',
      'Redis',
      'MongoDB',
      'JWT Auth',
      'React.js',
    ],
    links: {
      preview: 'https://real-time-multiplayer-quiz-app.vercel.app/', // your live app link
      github: 'https://github.com/AnyxByte/Real-time-multiplayer-quiz-app', // replace with your repo link
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Software Developer Intern',
    company: 'Digilet Labs LLP',
    description:
      'Developed and enhanced core user interface components using React.js, Next.js, Node.js, Express.js, and Tailwind CSS. Engineered the complete "Request Access" workflow for private canvases, including request pages, notifications, and handling acceptance/rejection flows. Built dynamic access control features enabling moderators to define granular permissions (edit, comment, moderator access).',
    period: 'Mar 2022 – Aug 2022',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Yaag Udyog Private Limited',
    description:
      'Designed and developed a full-stack Project Management System to streamline task tracking, financial transactions, and overall project lifecycle management. Built an application using React.js that allowed users to create and assign tasks, track timelines, view progress dashboards, and manage transactional workflows.',
    period: 'June 2024 – Aug 2024',
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'Tailwind',
      'MongoDb',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
