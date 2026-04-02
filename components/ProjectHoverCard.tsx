'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

type AspectRatio = 'landscape' | 'square' | 'portrait' | 'video' | 'wide';

const aspectClassMap: Record<AspectRatio, string> = {
  wide: 'aspect-[2/1.35]',
  landscape: 'aspect-[16/10]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  video: 'aspect-video',
};

export interface ProjectHoverCardProps {
  title: string;
  category?: string;
  image?: string;
  thumbnailUrl?: string | null;
  href?: string;
  onClick?: () => void;
  aspectRatio?: AspectRatio;
  /** When set, replaces the default image / placeholder area */
  children?: ReactNode;
  /** Small text below title in hover overlay (e.g. copyright) */
  hoverFooter?: ReactNode;
}

export function ProjectHoverCard({
  title,
  category,
  image,
  thumbnailUrl,
  href,
  onClick,
  aspectRatio = 'wide',
  children,
  hoverFooter,
}: ProjectHoverCardProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const aspectClass = aspectClassMap[aspectRatio];

  const showImage = thumbnailUrl || image;

  const visual = children ?? (
    showImage ? (
      thumbnailUrl ? (
        <img
          src={thumbnailUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      ) : (
        <img
          src={`${basePath}/images/${encodeURIComponent(image!)}`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )
    ) : (
      <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center text-neutral-400 text-xs text-center px-4">
        {title.slice(0, 42)}
        {title.length > 42 ? '…' : ''}
      </div>
    )
  );

  const overlay = (
    <div className="absolute inset-0 z-[1] bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-stretch justify-end p-6 pointer-events-none">
      <div className="text-left">
        {category && (
          <span className="block text-xs font-medium text-white/80 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-1">
            {category}
          </span>
        )}
        <h3 className="text-white text-lg md:text-xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
          {title}
        </h3>
        {hoverFooter && (
          <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/75 text-xs">
            {hoverFooter}
          </div>
        )}
      </div>
    </div>
  );

  const inner = (
    <>
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-neutral-100`}>
        {visual}
        {overlay}
      </div>
    </>
  );

  const className =
    'group block w-full text-left rounded-lg border border-neutral-200 bg-white overflow-hidden transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={href!} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </Link>
  );
}
