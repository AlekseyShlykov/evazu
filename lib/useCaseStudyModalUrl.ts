'use client';

import { useCallback, useEffect, useState } from 'react';
import { isValidCaseStudyId } from '@/lib/caseStudyIds';

/** Query key for deep links to an open case study modal, e.g. /illustration/?case=brutalist-belgrade */
export const CASE_STUDY_QUERY = 'case';

function readCaseFromUrl(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const id = new URLSearchParams(window.location.search).get(CASE_STUDY_QUERY);
    return id && isValidCaseStudyId(id) ? id : null;
  } catch {
    return null;
  }
}

/**
 * Read/write the modal-open state from the URL **without** subscribing to
 * `next/navigation`'s `useSearchParams`. That hook forces every page that
 * uses it into a client-side bailout (`BAILOUT_TO_CLIENT_SIDE_RENDERING`),
 * which delays first paint and pushes the LCP image well past hydration.
 *
 * Because the modal only ever opens after user interaction (or a deep
 * link), the initial server-rendered HTML always renders without a modal,
 * which matches the static-export build. We pick up the deep-link case
 * after mount via `readCaseFromUrl`, and stay in sync with browser
 * back/forward via `popstate`.
 */
export function useCaseStudyModalUrl() {
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);

  useEffect(() => {
    setOpenCaseStudy(readCaseFromUrl());
    const onPop = () => setOpenCaseStudy(readCaseFromUrl());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const openCaseStudyModal = useCallback((id: string) => {
    if (!isValidCaseStudyId(id)) return;
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set(CASE_STUDY_QUERY, id);
    window.history.replaceState(null, '', url.toString());
    setOpenCaseStudy(id);
  }, []);

  const closeCaseStudyModal = useCallback(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.delete(CASE_STUDY_QUERY);
    const qs = url.searchParams.toString();
    const next = `${url.pathname}${qs ? `?${qs}` : ''}${url.hash}`;
    window.history.replaceState(null, '', next);
    setOpenCaseStudy(null);
  }, []);

  return { openCaseStudy, openCaseStudyModal, closeCaseStudyModal };
}
