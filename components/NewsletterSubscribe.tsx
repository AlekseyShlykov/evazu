'use client';

import { FormEvent, useState } from 'react';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';

const fieldClass =
  'w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 shadow-sm transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

export function NewsletterSubscribe() {
  const { locale } = useLanguage();
  const t = translations[locale].newsletter;
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') ?? '').trim();

    setSubmitting(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSucceeded(true);
        form.reset();
        return;
      }
      setError(t.error);
    } catch {
      setError(t.error);
    } finally {
      setSubmitting(false);
    }
  }

  if (succeeded) {
    return (
      <p className="w-full text-base font-medium text-neutral-800" role="status">
        {t.thanks}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full min-w-0 space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="min-w-0 flex-1">
          <label htmlFor="newsletter-email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-500">
            {t.emailLabel}
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder={t.emailPlaceholder}
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="shrink-0 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 sm:mb-0"
        >
          {submitting ? t.sending : t.submit}
        </button>
      </div>
      {error ? (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
