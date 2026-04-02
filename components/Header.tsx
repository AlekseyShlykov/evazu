'use client';

import Link from 'next/link';
import { useEffect, useState, useCallback, useRef } from 'react';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

const navKeys = ['illustration', 'animation', 'design', 'services', 'about'] as const;
const navHrefs: Record<(typeof navKeys)[number], string> = {
  illustration: '/illustration',
  animation: '/animation',
  design: '/design',
  services: '/services',
  about: '/about',
};

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Header() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const [mobileOpen, setMobileOpen] = useState(false);
  const navBarRef = useRef<HTMLElement>(null);
  const [navBarHeight, setNavBarHeight] = useState(57);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const el = navBarRef.current;
    if (!el) return;
    const measure = () => setNavBarHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileOpen, closeMobile]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] border-b border-neutral-200 bg-neutral-50/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-50/80">
      <nav
        ref={navBarRef}
        className="mx-auto flex max-w-content min-w-0 items-center justify-between gap-2 md:gap-4 px-4 py-4 md:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900 hover:text-accent transition-colors shrink-0 min-w-0"
          onClick={closeMobile}
        >
          {t.hero.name}
        </Link>

        <button
          type="button"
          className="md:hidden shrink-0 rounded-md p-2 text-neutral-700 hover:bg-neutral-200/80 hover:text-neutral-900 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <MenuIcon open={mobileOpen} />
        </button>

        <div className="hidden md:flex items-center gap-4 min-w-0 shrink">
          <ul className="flex flex-wrap items-center justify-end gap-1 md:gap-2 text-sm min-w-0">
            {navKeys.map((key) => (
              <li key={key}>
                <Link
                  href={navHrefs[key]}
                  className="text-neutral-600 hover:text-neutral-900 px-1.5 py-1 rounded transition-colors whitespace-nowrap"
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="shrink-0">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-x-0 bottom-0 z-40 bg-black/40 md:hidden"
            style={{ top: navBarHeight }}
            aria-hidden
            onClick={closeMobile}
          />
          <div
            id="mobile-nav-panel"
            className="fixed left-0 right-0 bottom-0 z-[45] overflow-y-auto bg-neutral-50 border-t border-neutral-200 shadow-lg md:hidden px-4 py-6"
            style={{ top: navBarHeight }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <ul className="flex flex-col gap-1 text-base">
              {navKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={navHrefs[key]}
                    className="block rounded-lg px-3 py-3 text-neutral-800 hover:bg-neutral-200/60 transition-colors"
                    onClick={closeMobile}
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                {t.sectionTitles.languages}
              </p>
              <LanguageSwitcher onLocaleChange={closeMobile} />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
