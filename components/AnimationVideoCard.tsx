'use client';

import { useState } from 'react';
import { ProjectHoverCard } from './ProjectHoverCard';
import { encodePublicPath, webpSrcFor } from '@/lib/imageSources';

interface AnimationVideoCardProps {
  vimeoId: string;
  projectTitle?: string;
  projectHref?: string;
  /** Filename in public/images — used as card cover instead of Vimeo thumbnail */
  coverImage?: string;
  /** Opens in-site case study modal instead of external link */
  onOpenCaseStudy?: () => void;
}

export function AnimationVideoCard({
  vimeoId,
  projectTitle,
  projectHref,
  coverImage,
  onOpenCaseStudy,
}: AnimationVideoCardProps) {
  const vimeoUrl = `https://vimeo.com/${vimeoId}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const localCover = coverImage
    ? `${basePath}${encodePublicPath('/images/' + coverImage)}`
    : null;
  const localCoverWebp = localCover ? webpSrcFor(localCover) : null;
  const remoteThumb = `https://vumbnail.com/${vimeoId}.jpg`;
  const [thumbError, setThumbError] = useState(false);
  const cardHref = projectHref ?? vimeoUrl;
  const title = projectTitle ?? `Vimeo ${vimeoId}`;

  return (
    <ProjectHoverCard
      title={title}
      href={cardHref}
      aspectRatio="wide"
      onClick={onOpenCaseStudy}
    >
      {!thumbError ? (
        localCover ? (
          <picture>
            {localCoverWebp && <source srcSet={localCoverWebp} type="image/webp" />}
            <img
              src={localCover}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
              loading="lazy"
              decoding="async"
              onError={() => setThumbError(true)}
            />
          </picture>
        ) : (
          <img
            src={remoteThumb}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setThumbError(true)}
          />
        )
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm bg-neutral-100">
          Video: vimeo.com/{vimeoId}
        </div>
      )}
    </ProjectHoverCard>
  );
}
