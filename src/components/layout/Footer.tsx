import Image from "next/image";
import { profile } from "@/data/profile";
import { withBase } from "@/lib/basePath";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-theme-surface border-t border-theme-border py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border-2 border-primary-500/30 flex-shrink-0">
              <Image
                src={withBase("/assets/images/prasanna-profile.png")}
                alt="Prasanna Poovelu"
                width={32}
                height={32}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div>
              <p className="text-theme-base font-semibold text-sm">{profile.name}</p>
              <p className="text-theme-subtle text-xs">{profile.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {[
              { label: "LinkedIn", href: profile.linkedin },
              { label: "GitHub",   href: profile.github },
              { label: "Email",    href: `mailto:${profile.email}` },
            ].map((link, i, arr) => (
              <span key={link.label} className="flex items-center gap-4">
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-theme-muted hover:text-primary-500 transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
                {i < arr.length - 1 && <span className="text-theme-border">·</span>}
              </span>
            ))}
          </div>
          <p className="text-theme-subtle text-xs">
            © {year} {profile.name}. Built with Next.js & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
