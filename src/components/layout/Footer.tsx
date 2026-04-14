import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface border-t border-dark-border py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
              PP
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{profile.name}</p>
              <p className="text-slate-500 text-xs">{profile.title}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
            <span className="text-dark-border">·</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
            <span className="text-dark-border">·</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-400 hover:text-primary-400 transition-colors text-sm font-medium"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-xs">
            © {year} {profile.name}. Built with Next.js & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
