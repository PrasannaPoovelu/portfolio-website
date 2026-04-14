import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
  glow = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-dark-border bg-dark-card p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10",
        glow && "ring-1 ring-primary-500/20",
        className
      )}
    >
      {children}
    </div>
  );
}
