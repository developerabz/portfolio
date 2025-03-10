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
  technologies 
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="text-sm bg-gray-100 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex space-x-4">
          {demoLink && (
            <a href={demoLink} className="text-burgundy-600 hover:text-burgundy-700">
              Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} className="text-burgundy-600 hover:text-burgundy-700">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 