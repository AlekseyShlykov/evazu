import { ProjectHoverCard } from './ProjectHoverCard';

export interface ProjectCardProps {
  title: string;
  href: string;
  category?: string;
  aspectRatio?: 'landscape' | 'square' | 'portrait' | 'video' | 'wide';
  image?: string;
  thumbnailUrl?: string | null;
  onClick?: () => void;
  priority?: boolean;
}

export function ProjectCard(props: ProjectCardProps) {
  return <ProjectHoverCard {...props} />;
}
