"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { useTheme } from "@/contexts/ThemeContext";
import { withBase } from "@/lib/basePath";

const skills = [
  { label: "React.js",               highlight: "primary" },
  { label: "TypeScript",             highlight: "primary" },
  { label: "Next.js",                highlight: "primary" },
  { label: "Micro Frontends",        highlight: "accent"  },
  { label: "Module Federation",      highlight: "accent"  },
  { label: "Vitest",                 highlight: "amber"   },
  { label: "Cypress",                highlight: "amber"   },
  { label: "React Testing Library",  highlight: "amber"   },
  { label: "Redux Toolkit",          highlight: "none"    },
  { label: "TanStack Query",         highlight: "none"    },
  { label: "Tailwind CSS",           highlight: "none"    },
  { label: "JavaScript ES6+",        highlight: "none"    },
  { label: "Sass/SCSS",              highlight: "none"    },
  { label: "REST APIs",              highlight: "none"    },
  { label: "CI/CD",                  highlight: "none"    },
  { label: "Git",                    highlight: "none"    },
  { label: "Vite",                   highlight: "none"    },
  { label: "Jest",                   highlight: "none"    },
  { label: "Agile/Scrum",            highlight: "none"    },
  { label: "WCAG Accessibility",     highlight: "none"    },
];

const highlightClass: Record<string, string> = {
  primary: "border-primary-500/50 text-primary-400 bg-primary-500/5 hover:bg-primary-500/15 hover:border-primary-400",
  accent:  "border-accent-500/50 text-accent-400 bg-accent-500/5 hover:bg-accent-500/15 hover:border-accent-400",
  amber:   "border-amber-500/40 text-amber-400 bg-amber-500/5 hover:bg-amber-500/15 hover:border-amber-400",
  none:    "border-theme-border text-theme-muted bg-theme-card hover:border-primary-500/40 hover:text-primary-400",
};

export default function Hero() {
  const { isDark } = useTheme();
  const handleScroll = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center overflow-hidden"
      style={{
        minHeight: "calc(100vh - 64px)",
        paddingTop: "64px",
        ...(isDark && {
          background: "linear-gradient(180deg, #1a1025 0%, #130d1e 25%, #111111 65%, #111111 100%)",
        }),
      }}
    >
      {/* Subtle top border accent line */}
      <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">

          {/* ── Left content ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              Open to Opportunities
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-theme-base leading-tight mb-3">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500 bg-clip-text text-transparent">
                Prasanna
              </span>
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl text-theme-muted font-medium mb-2">
              {profile.title}
              <span className="mx-2 text-theme-border">·</span>
              <span className="text-primary-400">{profile.tagline}</span>
            </p>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-primary-500 rounded-full mb-4 mx-auto lg:mx-0" />

            {/* Tagline */}
            <p className="text-theme-muted max-w-lg mx-auto lg:mx-0 mb-7 leading-relaxed text-sm">
              5+ years building scalable enterprise UIs with{" "}
              <span className="text-primary-400 font-semibold">Micro Frontend</span>{" "}
              architecture. Expert in{" "}
              <span className="text-theme-base font-semibold">Vitest</span> &amp;{" "}
              <span className="text-theme-base font-semibold">Cypress</span> testing.
              Currently at{" "}
              <span className="text-theme-base font-semibold">Infosys</span> for{" "}
              <span className="text-primary-400 font-semibold">Barclays</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={() => handleScroll("#projects")}
                className="px-6 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-primary-500/20 hover:-translate-y-0.5"
              >
                View My Work
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="px-6 py-2.5 rounded-lg border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 font-semibold text-sm transition-all duration-200"
              >
                Get In Touch
              </button>
              <a
                href={withBase("/Prasanna_Resume.pdf")}
                download="Prasanna_Poovelu_Resume.pdf"
                className="px-6 py-2.5 rounded-lg border border-theme-border text-theme-muted hover:text-theme-base hover:bg-theme-surface font-semibold text-sm transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* ── Right: Profile photo ── */}
          <div className="relative flex-shrink-0 flex flex-col items-center gap-5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full border border-primary-500/20" />
              <div className="relative w-52 h-52 rounded-full overflow-hidden border-2 border-primary-500/40">
                <Image
                  src={withBase("/assets/images/prasanna-profile.png")}
                  alt="Prasanna Poovelu — Front-End Developer"
                  fill
                  sizes="208px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -top-2 -right-6 bg-theme-card border border-theme-border rounded-lg px-3 py-1.5 text-center shadow-lg">
                <p className="text-primary-400 font-bold text-base leading-none">5+</p>
                <p className="text-theme-subtle text-xs mt-0.5">Years Exp</p>
              </div>
              <div className="absolute -bottom-2 -left-6 bg-theme-card border border-theme-border rounded-lg px-3 py-1.5 text-center shadow-lg">
                <p className="text-amber-400 font-bold text-base leading-none">🏆</p>
                <p className="text-theme-subtle text-xs mt-0.5">Award</p>
              </div>
            </div>

            <div className="flex gap-3 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-theme-card border border-theme-border text-theme-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Chennai, India
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-theme-card border border-theme-border text-theme-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                Remote Ready
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Skills Section ── */}
      <div className="w-full max-w-4xl mx-auto px-4 pb-12 text-center">
        {/* Separator */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-theme-border" />
          <span className="text-xs text-theme-subtle tracking-widest uppercase font-medium">Core Technologies</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-theme-border" />
        </div>

        {/* Pills — centered, staggered fade-in-up */}
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, i) => (
            <span
              key={skill.label}
              className={`skill-pill px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 cursor-default hover:-translate-y-0.5 hover:shadow-sm ${highlightClass[skill.highlight]}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
