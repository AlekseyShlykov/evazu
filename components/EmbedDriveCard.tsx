'use client';

interface EmbedDriveCardProps {
  title: string;
  href: string;
  embedDriveId: string;
  category?: string;
}

export function EmbedDriveCard({
  title,
  href,
  embedDriveId,
  category,
}: EmbedDriveCardProps) {
  const embedUrl = `https://drive.google.com/file/d/${embedDriveId}/preview`;

  return (
    <div className="rounded-lg border border-neutral-200 bg-white overflow-hidden transition-shadow hover:shadow-lg">
      <div className="w-full aspect-[2/1.35] min-h-[280px] bg-neutral-100">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full border-0"
          allow="autoplay"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        {category && (
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {category}
          </span>
        )}
        <h3 className="mt-1 text-base font-medium text-neutral-900">{title}</h3>
        <p className="text-xs text-neutral-500 mt-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Open in Google Drive →
          </a>
        </p>
      </div>
    </div>
  );
}
