'use client';

import type { ReactNode } from 'react';
import { useEffect, useLayoutEffect, useRef, useCallback, useState } from 'react';

export interface CaseStudySection {
  type: 'heading' | 'paragraph' | 'image' | 'imageGrid' | 'link' | 'vimeo';
  text?: string;
  src?: string;
  alt?: string;
  href?: string;
  label?: string;
  images?: { src: string; alt?: string }[];
  columns?: number;
  /** If true, every image stays one column (two per row) regardless of aspect ratio */
  fixedTwoColumns?: boolean;
  /** If true with imageGrid, stack images vertically at full width */
  singleColumn?: boolean;
  /** Vimeo video ID for type "vimeo" */
  vimeoId?: string;
  /** iframe title (accessibility) */
  iframeTitle?: string;
  /** If true (type image), span full modal width instead of half when image reads as square */
  fullWidth?: boolean;
}

export interface CaseStudy {
  title: string;
  sections: CaseStudySection[];
}

interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
}

/** |aspectRatio − 1| ≤ tolerance counts as square (two per row). */
const SQUARE_ASPECT_TOLERANCE = 0.12;

function isSquareAspect(naturalWidth: number, naturalHeight: number): boolean {
  if (naturalWidth <= 0 || naturalHeight <= 0) return false;
  const r = naturalWidth / naturalHeight;
  return Math.abs(r - 1) <= SQUARE_ASPECT_TOLERANCE;
}

function CaseStudyAspectImage({
  src,
  alt,
  onClick,
  fullWidth,
}: {
  src: string;
  alt: string;
  onClick: () => void;
  fullWidth?: boolean;
}) {
  const [span, setSpan] = useState<'square' | 'wide' | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const applySpan = (img: HTMLImageElement) => {
    const { naturalWidth: w, naturalHeight: h } = img;
    if (w > 0 && h > 0) {
      setSpan(isSquareAspect(w, h) ? 'square' : 'wide');
    }
  };

  useLayoutEffect(() => {
    const el = imgRef.current;
    if (el?.complete && el.naturalWidth > 0) applySpan(el);
  }, [src]);

  const colClass = fullWidth ? 'col-span-2' : span === 'square' ? 'col-span-1' : 'col-span-2';

  return (
    <div className={`min-w-0 ${colClass}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-auto max-w-full rounded-lg cursor-zoom-in"
        loading="lazy"
        onLoad={(e) => applySpan(e.currentTarget)}
        onClick={onClick}
      />
    </div>
  );
}

function CaseStudyFixedCellImage({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}) {
  return (
    <div className="min-w-0 col-span-1">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto max-w-full rounded-lg cursor-zoom-in"
        loading="lazy"
        onClick={onClick}
      />
    </div>
  );
}

function CaseStudyImageRun({
  images,
  resolveImgSrc,
  onImageClick,
  fixedTwoColumns = false,
  singleColumn = false,
}: {
  images: { src: string; alt: string; fullWidth?: boolean }[];
  resolveImgSrc: (src: string) => string;
  onImageClick: (resolvedSrc: string, alt: string) => void;
  fixedTwoColumns?: boolean;
  singleColumn?: boolean;
}) {
  if (singleColumn) {
    return (
      <div className="flex w-full flex-col gap-4">
        {images.map((img, j) => {
          const resolved = resolveImgSrc(img.src);
          const onClick = () => onImageClick(resolved, img.alt);
          return (
            <div key={`${img.src}-${j}`} className="min-w-0 w-full">
              <img
                src={resolved}
                alt={img.alt}
                className="w-full h-auto max-w-full rounded-lg cursor-zoom-in"
                loading="lazy"
                onClick={onClick}
              />
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="grid w-full grid-cols-2 gap-4">
      {images.map((img, j) => {
        const resolved = resolveImgSrc(img.src);
        const onClick = () => onImageClick(resolved, img.alt);
        return fixedTwoColumns ? (
          <CaseStudyFixedCellImage key={`${img.src}-${j}`} src={resolved} alt={img.alt} onClick={onClick} />
        ) : (
          <CaseStudyAspectImage
            key={`${img.src}-${j}`}
            src={resolved}
            alt={img.alt}
            onClick={onClick}
            fullWidth={img.fullWidth === true}
          />
        );
      })}
    </div>
  );
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

  const sectionNodes: ReactNode[] = [];
  let si = 0;
  while (si < study.sections.length) {
    const section = study.sections[si];
    if (section.type === 'image') {
      const run: { src: string; alt: string; fullWidth?: boolean }[] = [];
      const start = si;
      while (si < study.sections.length && study.sections[si].type === 'image') {
        const im = study.sections[si];
        run.push({ src: im.src!, alt: im.alt || '', fullWidth: im.fullWidth });
        si++;
      }
      sectionNodes.push(
        <CaseStudyImageRun
          key={`case-images-${start}`}
          images={run}
          resolveImgSrc={resolveImgSrc}
          onImageClick={(resolved, alt) => setLightboxSrc({ src: resolved, alt })}
        />,
      );
      continue;
    }
    if (section.type === 'imageGrid') {
      sectionNodes.push(
        <CaseStudyImageRun
          key={`case-grid-${si}`}
          images={(section.images || []).map((img) => ({ src: img.src, alt: img.alt || '' }))}
          resolveImgSrc={resolveImgSrc}
          onImageClick={(resolved, alt) => setLightboxSrc({ src: resolved, alt })}
          fixedTwoColumns={section.fixedTwoColumns === true}
          singleColumn={section.singleColumn === true}
        />,
      );
      si++;
      continue;
    }
    if (section.type === 'vimeo' && section.vimeoId) {
      const vid = section.vimeoId;
      const iframeTitle = section.iframeTitle || 'Vimeo video';
      const src = `https://player.vimeo.com/video/${vid}?badge=0&autopause=0&muted=1&loop=1`;
      sectionNodes.push(
        <div key={`case-vimeo-${si}`} className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
          <iframe
            src={src}
            title={iframeTitle}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>,
      );
      si++;
      continue;
    }
    switch (section.type) {
      case 'heading':
        sectionNodes.push(
          <h3 key={si} className="text-base font-semibold text-neutral-900 leading-relaxed">
            {section.text}
          </h3>,
        );
        break;
      case 'paragraph':
        sectionNodes.push(
          <p key={si} className="text-base text-neutral-700 leading-relaxed whitespace-pre-line">
            {section.text}
          </p>,
        );
        break;
      case 'link':
        sectionNodes.push(
          <a
            key={si}
            href={section.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-left text-base text-accent hover:underline font-medium"
          >
            {section.label || section.href} →
          </a>,
        );
        break;
      default:
        break;
    }
    si++;
  }

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
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white/95 backdrop-blur px-6 py-4 md:px-10">
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

        <div className="px-6 py-8 md:px-10 md:py-10 space-y-6 text-left">{sectionNodes}</div>
      </div>
    </div>
  );
}
