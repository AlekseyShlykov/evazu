'use client';

import type { ReactNode } from 'react';
import { useEffect, useLayoutEffect, useMemo, useRef, useCallback, useState } from 'react';

export interface CaseStudySection {
  type: 'heading' | 'paragraph' | 'image' | 'imageGrid' | 'imageHalf' | 'link' | 'vimeo' | 'vimeoRow' | 'nativeVideo';
  text?: string;
  src?: string;
  alt?: string;
  href?: string;
  label?: string;
  images?: { src: string; alt?: string }[];
  /** For type imageHalf: one image at 50% width centered, or two images side by side (~half width each) */
  imageHalfLayout?: 'single' | 'pair';
  columns?: number;
  /** If true, every image stays one column (two per row) regardless of aspect ratio */
  fixedTwoColumns?: boolean;
  /** If true with imageGrid, stack images vertically at full width */
  singleColumn?: boolean;
  /** Vimeo video ID for type "vimeo" */
  vimeoId?: string;
  /** iframe title (accessibility) */
  iframeTitle?: string;
  /** Responsive wrapper padding-top, e.g. "70.69%" when Vimeo embed uses a non-16:9 ratio */
  vimeoPaddingTop?: string;
  /** When true, add autoplay=1 (still uses muted=1 for typical browser policy) */
  vimeoAutoplay?: boolean;
  /** Default true: add muted=1 (browser autoplay). Set false for narrative embeds. */
  vimeoMuted?: boolean;
  /** Default true: add loop=1. Set false for one-shot films. */
  vimeoLoop?: boolean;
  /** For type vimeoRow: multiple Vimeo embeds in one row (e.g. two square videos side by side) */
  vimeoItems?: {
    vimeoId: string;
    iframeTitle?: string;
    vimeoPaddingTop?: string;
    vimeoAutoplay?: boolean;
    vimeoMuted?: boolean;
    vimeoLoop?: boolean;
  }[];
  /** If true (type image), span full modal width instead of half when image reads as square */
  fullWidth?: boolean;
  /** With type image + fullWidth: show in a wide 2:1 frame (object-cover) for a rectangular banner */
  imageWideBanner?: boolean;
  /** For type nativeVideo: path under public/ (e.g. /images/clip.mp4) */
  videoSrc?: string;
  /** Muted autoplay is required by browsers for autoPlay to work */
  videoAutoplay?: boolean;
  videoLoop?: boolean;
  videoMuted?: boolean;
}

export interface CaseStudy {
  title: string;
  sections: CaseStudySection[];
}

function buildVimeoEmbedSrc(
  vid: string,
  opts: { autoplay?: boolean; muted?: boolean; loop?: boolean } = {},
) {
  const useMuted = opts.muted !== false;
  const useLoop = opts.loop !== false;
  const params = new URLSearchParams();
  params.set('badge', '0');
  params.set('autopause', '0');
  if (useMuted) params.set('muted', '1');
  if (useLoop) params.set('loop', '1');
  if (opts.autoplay) params.set('autoplay', '1');
  return `https://player.vimeo.com/video/${vid}?${params.toString()}`;
}

interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
}

/** All images in a case study in on-screen order (for lightbox navigation). */
function collectCaseStudyImages(
  study: CaseStudy,
  resolveImgSrc: (src: string) => string,
): { src: string; alt: string }[] {
  const items: { src: string; alt: string }[] = [];
  let si = 0;
  while (si < study.sections.length) {
    const section = study.sections[si];
    if (section.type === 'imageHalf') {
      const layout = section.imageHalfLayout;
      if (layout === 'single' && section.src) {
        items.push({ src: resolveImgSrc(section.src), alt: section.alt || '' });
      } else if (layout === 'pair' && section.images) {
        for (const img of section.images.slice(0, 2)) {
          items.push({ src: resolveImgSrc(img.src), alt: img.alt || '' });
        }
      }
      si++;
      continue;
    }
    if (section.type === 'image') {
      while (si < study.sections.length && study.sections[si].type === 'image') {
        const im = study.sections[si];
        items.push({ src: resolveImgSrc(im.src!), alt: im.alt || '' });
        si++;
      }
      continue;
    }
    if (section.type === 'imageGrid') {
      for (const img of section.images || []) {
        items.push({ src: resolveImgSrc(img.src), alt: img.alt || '' });
      }
      si++;
      continue;
    }
    si++;
  }
  return items;
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
  wideBanner,
}: {
  src: string;
  alt: string;
  onClick: () => void;
  fullWidth?: boolean;
  wideBanner?: boolean;
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

  if (wideBanner === true && fullWidth === true) {
    return (
      <div className="min-w-0 col-span-2">
        <div className="aspect-[2/1] w-full overflow-hidden rounded-lg">
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            className="h-full w-full object-cover cursor-zoom-in"
            loading="lazy"
            decoding="async"
            onLoad={(e) => applySpan(e.currentTarget)}
            onClick={onClick}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-w-0 ${colClass}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-auto max-w-full rounded-lg cursor-zoom-in"
        loading="lazy"
        decoding="async"
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
        decoding="async"
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
  images: { src: string; alt: string; fullWidth?: boolean; imageWideBanner?: boolean }[];
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
                decoding="async"
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
            wideBanner={img.imageWideBanner === true}
          />
        );
      })}
    </div>
  );
}

function CaseStudyImageGalleryLightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}) {
  const n = items.length;
  const safeIndex = n === 0 ? 0 : Math.min(Math.max(0, index), n - 1);
  const current = items[safeIndex];

  const goPrev = useCallback(() => {
    if (n <= 1) return;
    onIndexChange((safeIndex - 1 + n) % n);
  }, [n, onIndexChange, safeIndex]);

  const goNext = useCallback(() => {
    if (n <= 1) return;
    onIndexChange((safeIndex + 1) % n);
  }, [n, onIndexChange, safeIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (n <= 1) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        onIndexChange((safeIndex - 1 + n) % n);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation();
        onIndexChange((safeIndex + 1) % n);
      }
    };
    document.addEventListener('keydown', handler, true);
    return () => document.removeEventListener('keydown', handler, true);
  }, [onClose, onIndexChange, n, safeIndex]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt || 'Image preview'}
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

      {n > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 md:left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors md:p-3.5"
            aria-label="Previous image"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 md:right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors md:p-3.5"
            aria-label="Next image"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
          <div
            className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white/90 tabular-nums"
            aria-live="polite"
          >
            {safeIndex + 1} / {n}
          </div>
        </>
      )}

      <img
        key={current.src}
        src={current.src}
        alt={current.alt}
        className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl cursor-default"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const imageGallery = useMemo(() => {
    const resolve = (src: string) => (src.startsWith('/') ? `${basePath}${src}` : src);
    return collectCaseStudyImages(study, resolve);
  }, [study, basePath]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [study]);

  const openLightbox = useCallback(
    (resolvedSrc: string, alt: string) => {
      let idx = imageGallery.findIndex((g) => g.src === resolvedSrc && g.alt === alt);
      if (idx < 0) idx = imageGallery.findIndex((g) => g.src === resolvedSrc);
      setLightboxIndex(idx >= 0 ? idx : 0);
    },
    [imageGallery],
  );

  const sectionNodes: ReactNode[] = [];
  let si = 0;
  while (si < study.sections.length) {
    const section = study.sections[si];
    if (section.type === 'imageHalf') {
      const layout = section.imageHalfLayout;
      if (layout === 'single' && section.src) {
        const resolved = resolveImgSrc(section.src);
        const alt = section.alt || '';
        sectionNodes.push(
          <div key={`case-image-half-${si}`} className="flex w-full justify-center">
            <img
              src={resolved}
              alt={alt}
              className="h-auto w-full max-w-[50%] rounded-lg cursor-zoom-in object-contain"
              loading="lazy"
              decoding="async"
              onClick={() => openLightbox(resolved, alt)}
            />
          </div>,
        );
      } else if (layout === 'pair' && section.images && section.images.length >= 2) {
        const imgs = section.images.slice(0, 2);
        sectionNodes.push(
          <div key={`case-image-half-pair-${si}`} className="grid w-full grid-cols-2 gap-4">
            {imgs.map((img, ji) => {
              const resolved = resolveImgSrc(img.src);
              const alt = img.alt || '';
              return (
                <div key={`${img.src}-${ji}`} className="min-w-0 flex justify-center">
                  <img
                    src={resolved}
                    alt={alt}
                    className="h-auto w-full max-w-full rounded-lg cursor-zoom-in object-contain"
                    loading="lazy"
                    decoding="async"
                    onClick={() => openLightbox(resolved, alt)}
                  />
                </div>
              );
            })}
          </div>,
        );
      }
      si++;
      continue;
    }
    if (section.type === 'image') {
      const run: { src: string; alt: string; fullWidth?: boolean; imageWideBanner?: boolean }[] = [];
      const start = si;
      while (si < study.sections.length && study.sections[si].type === 'image') {
        const im = study.sections[si];
        run.push({
          src: im.src!,
          alt: im.alt || '',
          fullWidth: im.fullWidth,
          imageWideBanner: im.imageWideBanner,
        });
        si++;
      }
      sectionNodes.push(
        <CaseStudyImageRun
          key={`case-images-${start}`}
          images={run}
          resolveImgSrc={resolveImgSrc}
          onImageClick={(resolved, alt) => openLightbox(resolved, alt)}
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
          onImageClick={(resolved, alt) => openLightbox(resolved, alt)}
          fixedTwoColumns={section.fixedTwoColumns === true}
          singleColumn={section.singleColumn === true}
        />,
      );
      si++;
      continue;
    }
    if (section.type === 'vimeoRow' && section.vimeoItems && section.vimeoItems.length > 0) {
      sectionNodes.push(
        <div key={`case-vimeo-row-${si}`} className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {section.vimeoItems.map((item, vi) => {
            const vid = item.vimeoId;
            const iframeTitle = item.iframeTitle || 'Vimeo video';
            const src = buildVimeoEmbedSrc(vid, {
              autoplay: item.vimeoAutoplay === true,
              muted: item.vimeoMuted,
              loop: item.vimeoLoop,
            });
            const paddingTop = item.vimeoPaddingTop ?? '56.25%';
            return (
              <div key={`${vid}-${vi}`} className="min-w-0">
                <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop }}>
                  <iframe
                    src={src}
                    title={iframeTitle}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            );
          })}
        </div>,
      );
      si++;
      continue;
    }
    if (section.type === 'vimeo' && section.vimeoId) {
      const vid = section.vimeoId;
      const iframeTitle = section.iframeTitle || 'Vimeo video';
      const src = buildVimeoEmbedSrc(vid, {
        autoplay: section.vimeoAutoplay === true,
        muted: section.vimeoMuted,
        loop: section.vimeoLoop,
      });
      const paddingTop = section.vimeoPaddingTop ?? '56.25%';
      sectionNodes.push(
        <div key={`case-vimeo-${si}`} className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop }}>
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
    if (section.type === 'nativeVideo' && section.videoSrc) {
      const resolved = resolveImgSrc(section.videoSrc);
      const autoplay = section.videoAutoplay === true;
      const loop = section.videoLoop === true;
      const muted = autoplay ? section.videoMuted !== false : section.videoMuted === true;
      sectionNodes.push(
        <div key={`case-native-video-${si}`} className="min-w-0 w-full overflow-hidden rounded-lg bg-neutral-100">
          <video
            src={resolved}
            controls
            playsInline
            className="h-auto w-full max-w-full"
            preload={autoplay ? 'auto' : 'metadata'}
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
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
            className="flex w-fit max-w-full items-center gap-1 text-left text-base text-accent hover:underline font-medium"
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
      {lightboxIndex !== null && imageGallery.length > 0 && (
        <CaseStudyImageGalleryLightbox
          items={imageGallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
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
