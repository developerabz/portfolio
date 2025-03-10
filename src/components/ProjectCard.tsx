import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  technologies?: string[];
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  demoLink, 
  githubLink,
  technologies,
}: ProjectCardProps) { 
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      {demoLink ? (
        <a href={demoLink} className="cursor-pointer">
          <div className="relative h-48 transition-transform hover:scale-105">
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover"
            />
          </div>
        </a>
      ) : (
        <div className="relative h-48">
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        {demoLink ? (
          <a href={demoLink} className="block hover:text-burgundy-600 dark:hover:text-burgundy-400">
            <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
          </a>
        ) : (
          <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
        )}
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="text-sm bg-gray-100 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex space-x-4">
          {demoLink && (
            <a href={demoLink} className="text-burgundy-600 hover:text-burgundy-700 dark:text-burgundy-400 dark:hover:text-burgundy-300">
              Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} className="text-burgundy-600 hover:text-burgundy-700 dark:text-burgundy-400 dark:hover:text-burgundy-300">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 