'use client';

import Link from 'next/link';
import { useState } from 'react';

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

  return (
    <Link
      href={cardHref}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-neutral-200 bg-white overflow-hidden transition-shadow hover:shadow-lg group"
    >
      <div className="w-full aspect-[2/1.21] bg-neutral-100 relative overflow-hidden">
        {!thumbError ? (
          <img
            src={thumbnailUrl}
            alt=""
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
            loading="lazy"
            onError={() => setThumbError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-400 text-sm">
            Video: vimeo.com/{vimeoId}
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-neutral-900 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      {(projectTitle || projectHref) && (
        <div className="p-4">
          <span className="text-base font-medium text-neutral-900 group-hover:text-accent transition-colors line-clamp-2">
            {projectTitle}
          </span>
        </div>
      )}
    </Link>
  );
}
