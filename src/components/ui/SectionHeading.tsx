interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-4">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-6">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary-500" />
        <span className="w-2 h-2 rounded-full bg-primary-500" />
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary-500" />
      </div>
    </div>
  );
}
