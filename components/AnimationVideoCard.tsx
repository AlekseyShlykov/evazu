'use client';

import { useState } from 'react';
import { ProjectHoverCard } from './ProjectHoverCard';

interface AnimationVideoCardProps {
  vimeoId: string;
  projectTitle?: string;
  projectHref?: string;
}

export function AnimationVideoCard({
  vimeoId,
  projectTitle,
  projectHref,
}: AnimationVideoCardProps) {
  const vimeoUrl = `https://vimeo.com/${vimeoId}`;
  const thumbnailUrl = `https://vumbnail.com/${vimeoId}.jpg`;
  const [thumbError, setThumbError] = useState(false);
  const cardHref = projectHref ?? vimeoUrl;
  const title = projectTitle ?? `Vimeo ${vimeoId}`;

  return (
    <ProjectHoverCard title={title} href={cardHref} aspectRatio="wide">
      {!thumbError ? (
        <img
          src={thumbnailUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
          loading="lazy"
          onError={() => setThumbError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm bg-neutral-100">
          Video: vimeo.com/{vimeoId}
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-neutral-900 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </ProjectHoverCard>
  );
}
