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
    title: 'Growth LMS',
    description: 'A full-stack learning management system built with React, Next.js, Tailwind CSS and TypeScript. (Backend in Progress)',
    image: '/growthlms-frontpage.png',
    demoLink: 'https://growth-lms.vercel.app/',
    githubLink: 'https://github.com/developerabz/growth-lms',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    type: 'webdev'
  },
  {
    title: 'TaskBee',
    description: 'Capstone collaborative project for a task management app built with React, MUI, Firebase, Tailwind CSS and TypeScript.',
    image: '/taskbee.png',
    demoLink: 'https://task-bee.vercel.app/',
    technologies: ['React', 'MUI', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    type: 'webdev'
  },
  {
    title: 'Multi Step Form',
    description: 'A responsive multi step form challenge by frontendmentor.io built with HTML, CSS and JavaScript',
    image: '/multi-step-form.png',
    demoLink: 'https://atom-low-ostrich.glitch.me/',
    githubLink: 'https://github.com/developerabz/multistep-form',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    type: 'webdev'
  },
  {
    title: 'Digital Bookshelf',
    description: 'A a simple site to record read books and their status built with HTML, CSS and JavaScript',
    image: '/bookshelf-frontpage.png',
    demoLink: 'https://developerabz.github.io/library/',
    githubLink: 'https://github.com/developerabz/library',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    type: 'webdev'
  },
  {
    title: 'My Deen First',
    description: 'Islamic website that provides counselling, consulting, pilgrimage and educational related services built with WordPress',
    image: '/mydeenfirst-frontpage.png',
    demoLink: 'https://mydeenfirst.com/',
    technologies: ['WordPress', 'SureCart', 'Zapier', 'Brevo', 'PHP', 'JavaScript', 'CSS', 'Stripe'],
    type: 'wordpress'
  },
  {
    title: 'Bula Racing',
    description: 'Developed a responsive website for a mechanics business that showcases services for Evo cars and allows the owner to list parts for sale.',
    image: '/bularacing-frontpage.png',
    demoLink: 'https://bularacing.com.au/',
    technologies: ['WooCommerce', 'WordPress'],
    type: 'wordpress'
  }
]; 