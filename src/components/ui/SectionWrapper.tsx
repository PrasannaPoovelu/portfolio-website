import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  darker?: boolean;
}

export default function SectionWrapper({ id, children, className, darker = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 px-4 sm:px-6 lg:px-8",
        darker ? "bg-theme-surface" : "bg-theme-page",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
