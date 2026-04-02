'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

export interface CaseStudySection {
  type: 'heading' | 'paragraph' | 'image' | 'imageGrid' | 'link';
  text?: string;
  src?: string;
  alt?: string;
  href?: string;
  label?: string;
  images?: { src: string; alt?: string }[];
  columns?: number;
}

export interface CaseStudy {
  title: string;
  sections: CaseStudySection[];
}

interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
}

function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.stopPropagation(); onClose(); }
    };
    document.addEventListener('keydown', handler, true);
    return () => document.removeEventListener('keydown', handler, true);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-zoom-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Image preview'}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
        aria-label="Close image"
      >
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 5l10 10M15 5L5 15" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [lightboxSrc, setLightboxSrc] = useState<{ src: string; alt: string } | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const resolveImgSrc = (src: string) =>
    src.startsWith('/') ? `${basePath}${src}` : src;

  const clickableImg = (src: string, alt: string, className: string, key?: string | number) => (
    <img
      key={key}
      src={resolveImgSrc(src)}
      alt={alt}
      className={`${className} cursor-zoom-in`}
      loading="lazy"
      onClick={() => setLightboxSrc({ src: resolveImgSrc(src), alt })}
    />
  );

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={study.title}
    >
      {lightboxSrc && (
        <ImageLightbox
          src={lightboxSrc.src}
          alt={lightboxSrc.alt}
          onClose={() => setLightboxSrc(null)}
        />
      )}

      <div
        ref={contentRef}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white/95 backdrop-blur px-6 py-4">
          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 pr-8 line-clamp-2">
            {study.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-8 md:px-10 md:py-10 space-y-6 text-left">
          {study.sections.map((section, i) => {
            switch (section.type) {
              case 'heading':
                return (
                  <h3 key={i} className="text-base font-semibold text-neutral-900 leading-relaxed">
                    {section.text}
                  </h3>
                );
              case 'paragraph':
                return (
                  <p key={i} className="text-base text-neutral-700 leading-relaxed whitespace-pre-line">
                    {section.text}
                  </p>
                );
              case 'image':
                return clickableImg(section.src!, section.alt || '', 'w-full max-w-full rounded-lg', i);
              case 'imageGrid':
                return (
                  <div key={i} className={`grid w-full gap-4 ${section.columns === 3 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2'}`}>
                    {section.images?.map((img, j) =>
                      clickableImg(img.src, img.alt || '', 'w-full rounded-lg', j)
                    )}
                  </div>
                );
              case 'link':
                return (
                  <a
                    key={i}
                    href={section.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-left text-base text-accent hover:underline font-medium"
                  >
                    {section.label || section.href} →
                  </a>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
