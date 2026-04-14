import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent" | "success" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        {
          "bg-theme-surface text-theme-muted border border-theme-border":
            variant === "default",
          "bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20":
            variant === "primary",
          "bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20":
            variant === "accent",
          "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20":
            variant === "success",
          "border border-theme-border text-theme-muted":
            variant === "outline",
        },
        {
          "px-2.5 py-0.5 text-xs": size === "sm",
          "px-3.5 py-1 text-sm":   size === "md",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
