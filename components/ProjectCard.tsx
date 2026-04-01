import Link from 'next/link';
import { PlaceholderImage } from './PlaceholderImage';

interface ProjectCardProps {
  title: string;
  href: string;
  category?: string;
  aspectRatio?: 'landscape' | 'square' | 'portrait' | 'video' | 'wide';
  image?: string;
  thumbnailUrl?: string | null;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  href,
  category,
  aspectRatio = 'landscape',
  image,
  thumbnailUrl,
  onClick,
}: ProjectCardProps) {
  const aspectClass =
    aspectRatio === 'wide'
      ? 'aspect-[2/1.35]'
      : aspectRatio === 'landscape'
        ? 'aspect-[16/10]'
        : aspectRatio === 'portrait'
          ? 'aspect-[3/4]'
          : aspectRatio === 'square'
            ? 'aspect-square'
            : 'aspect-video';

  const showImage = thumbnailUrl || image;

  const imageContent = showImage ? (
    thumbnailUrl ? (
      <img
        src={thumbnailUrl}
        alt=""
        className={`w-full max-w-full ${aspectClass} object-cover block`}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    ) : (
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/${encodeURIComponent(image!)}`}
        alt=""
        className={`w-full max-w-full ${aspectClass} object-cover block`}
        loading="lazy"
      />
    )
  ) : (
    <PlaceholderImage
      aspectRatio={aspectRatio}
      className="w-full"
      label={title.slice(0, 30) + (title.length > 30 ? '…' : '')}
    />
  );

  const textContent = (
    <div className="p-4">
      {category && (
        <span className="text-xs font-medium text-accent uppercase tracking-wider">
          {category}
        </span>
      )}
      <h3 className="mt-1 text-base font-medium text-neutral-900 group-hover:text-accent transition-colors line-clamp-2">
        {title}
      </h3>
    </div>
  );

  const cardClassName = "group block w-full text-left rounded-lg border border-neutral-200 bg-white overflow-hidden transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cardClassName}>
        {imageContent}
        {textContent}
      </button>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClassName}
    >
      {imageContent}
      {textContent}
    </Link>
  );
}
