'use client';

import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  items: string[];
  href?: string;
}

export function ServiceCard({ title, items, href }: ServiceCardProps) {
  const content = (
    <>
      <h3 className="text-lg font-semibold text-neutral-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-neutral-600 text-sm md:text-base">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-accent mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {content}
    </article>
  );
}
