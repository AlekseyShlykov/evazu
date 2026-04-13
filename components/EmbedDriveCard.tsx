'use client';

import { ProjectHoverCard } from './ProjectHoverCard';

interface EmbedDriveCardProps {
  title: string;
  href: string;
  embedDriveId: string;
  category?: string;
}

export function EmbedDriveCard({
  title,
  href,
  embedDriveId,
  category,
}: EmbedDriveCardProps) {
  const embedUrl = `https://drive.google.com/file/d/${embedDriveId}/preview`;

  return (
    <ProjectHoverCard
      title={title}
      category={category}
      href={href}
      hoverFooter={<span>Open in Google Drive →</span>}
    >
      <div className="absolute inset-0 pointer-events-none bg-neutral-100">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full border-0"
          allow="autoplay"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </ProjectHoverCard>
  );
}
