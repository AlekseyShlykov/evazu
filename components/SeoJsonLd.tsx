import { site } from '@/lib/data';
import { translations } from '@/lib/translations';
import { absoluteOgImageUrl, siteCanonicalUrl } from '@/lib/seo';

/**
 * JSON-LD for the site (Person + WebSite + CreativeWork), using existing copy and contact links only.
 */
export function SeoJsonLd() {
  const en = translations.en;
  const url = siteCanonicalUrl('/');
  const imageUrl = absoluteOgImageUrl();

  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${url}#website`,
      url,
      name: en.hero.name,
      inLanguage: ['en', 'fr'],
      publisher: { '@id': `${url}#person` },
    },
    {
      '@type': 'Person',
      '@id': `${url}#person`,
      name: en.hero.name,
      url,
      jobTitle: en.hero.tagline,
      image: imageUrl,
      email: `mailto:${site.email}`,
      sameAs: [site.telegram, site.instagram],
    },
    {
      '@type': 'CreativeWork',
      '@id': `${url}#portfolio`,
      name: en.hero.name,
      url,
      author: { '@id': `${url}#person` },
      inLanguage: ['en', 'fr'],
    },
  ];

  const payload = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
