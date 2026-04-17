'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';

const FORMSPREE_FORM_ID = 'meevgoly';

const fieldClass =
  'w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 shadow-sm transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

export function NewsletterSubscribe() {
  const { locale } = useLanguage();
  const t = translations[locale].newsletter;
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    return (
      <p className="w-full text-base font-medium text-neutral-800" role="status">
        {t.thanks}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full min-w-0 space-y-4">
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
          <ValidationError field="email" errors={state.errors} className="mt-1 block text-sm text-red-600" />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="shrink-0 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 sm:mb-0"
        >
          {state.submitting ? t.sending : t.submit}
        </button>
      </div>
      <ValidationError errors={state.errors} className="block text-sm text-red-600" />
    </form>
  );
}
