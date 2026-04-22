'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import type { CaseStudyId } from '@/lib/caseStudyIds';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';
import type { CaseStudy } from './CaseStudyModal';

const CaseStudyModal = dynamic(
  () => import('./CaseStudyModal').then((m) => m.CaseStudyModal),
  { ssr: false },
);

type CaseStudyModalGateProps = {
  studyId: string | null;
  locale: Locale;
  onClose: () => void;
};

export function CaseStudyModalGate({ studyId, locale, onClose }: CaseStudyModalGateProps) {
  const [study, setStudy] = useState<CaseStudy | null>(null);
  const requestSeq = useRef(0);

  useEffect(() => {
    if (!studyId) {
      setStudy(null);
      return;
    }
    const seq = ++requestSeq.current;
    let cancelled = false;
    void import('@/lib/caseStudies').then((mod) => {
      if (cancelled || seq !== requestSeq.current) return;
      const next = mod.caseStudies[studyId as CaseStudyId]?.[locale];
      setStudy(next ?? null);
    });
    return () => {
      cancelled = true;
    };
  }, [studyId, locale]);

  if (!studyId || !study) return null;

  return <CaseStudyModal study={study} onClose={onClose} a11y={translations[locale].a11y} />;
}
