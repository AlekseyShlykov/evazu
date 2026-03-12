'use client';

type AspectRatio = 'landscape' | 'portrait' | 'square' | 'video' | 'wide';

const aspectRatios: Record<AspectRatio, string> = {
  landscape: 'aspect-[16/10]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  video: 'aspect-video',
  wide: 'aspect-[2/1.35]',
};

interface PlaceholderImageProps {
  aspectRatio?: AspectRatio;
  className?: string;
  label?: string;
}

export function PlaceholderImage({
  aspectRatio = 'landscape',
  className = '',
  label = 'Image placeholder',
}: PlaceholderImageProps) {
  return (
    <div
      className={`bg-white border border-neutral-200 rounded-sm overflow-hidden ${aspectRatios[aspectRatio]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="w-full h-full flex items-center justify-center text-neutral-300 text-xs font-medium">
        {label}
      </div>
    </div>
  );
}
