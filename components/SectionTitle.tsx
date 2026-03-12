interface SectionTitleProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ id, children, className = '' }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className={`text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-6 md:mb-8 ${id ? 'scroll-mt-20' : ''} ${className}`}
    >
      {children}
    </h2>
  );
}
