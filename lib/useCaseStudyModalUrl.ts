'use client';

import { useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { isValidCaseStudyId } from '@/lib/caseStudyIds';

/** Query key for deep links to an open case study modal, e.g. /illustration/?case=brutalist-belgrade */
export const CASE_STUDY_QUERY = 'case';

function pathWithTrailingSlash(pathname: string): string {
  if (pathname === '/' || pathname === '') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function useCaseStudyModalUrl() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const openCaseStudy = useMemo(() => {
    const id = searchParams.get(CASE_STUDY_QUERY);
    return id && isValidCaseStudyId(id) ? id : null;
  }, [searchParams]);

  const basePath = useCallback(() => pathWithTrailingSlash(pathname), [pathname]);

  const openCaseStudyModal = useCallback(
    (id: string) => {
      if (!isValidCaseStudyId(id)) return;
      const params = new URLSearchParams(searchParams.toString());
      params.set(CASE_STUDY_QUERY, id);
      const qs = params.toString();
      router.replace(`${basePath()}?${qs}`, { scroll: false });
    },
    [router, searchParams, basePath],
  );

  const closeCaseStudyModal = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(CASE_STUDY_QUERY);
    const qs = params.toString();
    router.replace(`${basePath()}${qs ? `?${qs}` : ''}`, { scroll: false });
  }, [router, searchParams, basePath]);

  return { openCaseStudy, openCaseStudyModal, closeCaseStudyModal };
}
