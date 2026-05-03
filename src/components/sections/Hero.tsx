"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { useTheme } from "@/contexts/ThemeContext";
import { withBase } from "@/lib/basePath";

const techStack = ["React.js", "TypeScript", "Next.js", "Redux Toolkit", "Tailwind CSS"];

export default function Hero() {
  const { isDark } = useTheme();
  const handleScroll = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

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
              5+ years building scalable enterprise UIs. Currently crafting
              high-performance React + TypeScript applications at{" "}
              <span className="text-theme-base font-semibold">Infosys</span> for{" "}
              <span className="text-primary-400 font-semibold">Barclays</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-7">
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

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="text-xs text-theme-subtle self-center mr-1">Stack:</span>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-theme-card border border-theme-border text-theme-muted hover:border-primary-500/40 hover:text-primary-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Profile photo ── */}
          <div className="relative flex-shrink-0 flex flex-col items-center gap-5">

            {/* Photo */}
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute -inset-3 rounded-full border border-primary-500/20" />
              {/* Photo circle */}
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

              {/* Stat badges */}
              <div className="absolute -top-2 -right-6 bg-theme-card border border-theme-border rounded-lg px-3 py-1.5 text-center shadow-lg">
                <p className="text-primary-400 font-bold text-base leading-none">5+</p>
                <p className="text-theme-subtle text-xs mt-0.5">Years Exp</p>
              </div>
              <div className="absolute -bottom-2 -left-6 bg-theme-card border border-theme-border rounded-lg px-3 py-1.5 text-center shadow-lg">
                <p className="text-amber-400 font-bold text-base leading-none">🏆</p>
                <p className="text-theme-subtle text-xs mt-0.5">Award</p>
              </div>
            </div>

            {/* Info pills below photo */}
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
    </section>
  );
}
