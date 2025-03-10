import { IconType } from 'react-icons';

interface SkillCardProps {
  icon: IconType;
  name: string;
  iconColor?: string;
}

export default function SkillCard({ icon: Icon, name, iconColor = 'currentColor' }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 shadow-md">
        <Icon className="w-8 h-8" style={{ color: iconColor }} />
      </div>
      <span className="text-sm font-medium dark:text-gray-300">{name}</span>
    </div>
  );
} 