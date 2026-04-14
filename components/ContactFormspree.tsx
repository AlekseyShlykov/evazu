'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/lib/translations';

const FORMSPREE_FORM_ID = 'xrerbqzv';

const fieldClass =
  'w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 shadow-sm transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

export function ContactFormspree() {
  const { locale } = useLanguage();
  const t = translations[locale].contact;
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    return (
      <p className="text-base font-medium text-neutral-800" role="status">
        {t.formThanks}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
      <div>
        <label htmlFor="contact-form-email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-500">
          {t.formEmailLabel}
        </label>
        <input
          id="contact-form-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className={fieldClass}
          placeholder={t.formEmailPlaceholder}
        />
        <ValidationError field="email" errors={state.errors} className="mt-1 block text-sm text-red-600" />
      </div>
      <div>
        <label htmlFor="contact-form-message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-500">
          {t.formMessageLabel}
        </label>
        <textarea
          id="contact-form-message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} min-h-[8rem] resize-y`}
          placeholder={t.formMessagePlaceholder}
        />
        <ValidationError field="message" errors={state.errors} className="mt-1 block text-sm text-red-600" />
      </div>
      <ValidationError errors={state.errors} className="block text-sm text-red-600" />
      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? t.formSending : t.formSend}
      </button>
    </form>
  );
}
