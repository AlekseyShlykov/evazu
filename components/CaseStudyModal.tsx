'use client';

import { useEffect, useRef, useCallback } from 'react';

export interface CaseStudySection {
  type: 'heading' | 'paragraph' | 'image' | 'link';
  text?: string;
  src?: string;
  alt?: string;
  href?: string;
  label?: string;
}

export interface CaseStudy {
  title: string;
  sections: CaseStudySection[];
}

interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
}

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={study.title}
    >
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

        <div className="px-6 py-8 md:px-10 md:py-10 space-y-6">
          {study.sections.map((section, i) => {
            switch (section.type) {
              case 'heading':
                return (
                  <h3 key={i} className="text-lg font-semibold text-neutral-900 mt-4">
                    {section.text}
                  </h3>
                );
              case 'paragraph':
                return (
                  <p key={i} className="text-neutral-700 leading-relaxed whitespace-pre-line">
                    {section.text}
                  </p>
                );
              case 'image':
                return (
                  <img
                    key={i}
                    src={section.src?.startsWith('/') ? `${basePath}${section.src}` : section.src}
                    alt={section.alt || ''}
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                );
              case 'link':
                return (
                  <a
                    key={i}
                    href={section.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline font-medium"
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
