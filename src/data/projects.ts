type ProjectType = 'wordpress' | 'webdev';

interface Project {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  technologies: string[];
  type: ProjectType;
}

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management.',
    image: '/next.svg',
    demoLink: '#',
    githubLink: '#',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    type: 'webdev'
  },
  {
    title: 'Restaurant Website',
    description: 'Custom WordPress theme for a local restaurant with online ordering system.',
    image: '/next.svg',
    demoLink: '#',
    githubLink: '#',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    type: 'wordpress'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: '/next.svg',
    demoLink: '#',
    githubLink: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    type: 'webdev'
  },
  {
    title: 'Online Course Platform',
    description: 'WordPress-based learning management system with custom plugins.',
    image: '/next.svg',
    demoLink: '#',
    githubLink: '#',
    technologies: ['WordPress', 'LearnDash', 'PHP', 'JavaScript'],
    type: 'wordpress'
  }
]; 