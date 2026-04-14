"use client";

import Image from "next/image";
import { profile } from "@/data/profile";

const techStack = ["React.js", "TypeScript", "Next.js", "Redux Toolkit", "Tailwind CSS"];

export default function Hero() {
  const handleScroll = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-theme-page overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 dark:opacity-40 opacity-20" />

      {/* Glow blobs — dark only */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none dark:block hidden" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-600/15 rounded-full blur-3xl pointer-events-none dark:block hidden" />
      {/* Light blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl pointer-events-none dark:hidden" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl pointer-events-none dark:hidden" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* ── Left content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              Open to Opportunities
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-theme-base leading-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-primary-400 bg-clip-text text-transparent">
                Prasanna
              </span>
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl text-theme-muted font-medium mb-2">
              {profile.title} &nbsp;·&nbsp;
              <span className="text-primary-500">{profile.tagline}</span>
            </p>

            {/* Tagline */}
            <p className="text-theme-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              5+ years building scalable enterprise UIs. Currently crafting
              high-performance React + TypeScript applications at{" "}
              <span className="text-theme-base font-medium">Infosys</span> for{" "}
              <span className="text-primary-500 font-medium">Barclays</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <button
                onClick={() => handleScroll("#projects")}
                className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
              >
                View My Work
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="px-6 py-3 rounded-lg border border-primary-500/40 text-primary-500 hover:bg-primary-500/10 font-semibold text-sm transition-all duration-200"
              >
                Get In Touch
              </button>
              <a
                href="mailto:prasanna.poovelu23@gmail.com"
                className="px-6 py-3 rounded-lg border border-theme-border text-theme-muted hover:text-theme-base hover:bg-theme-surface font-semibold text-sm transition-all duration-200"
              >
                Download CV
              </a>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="text-xs text-theme-subtle self-center mr-1">Core Stack:</span>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-theme-card border border-theme-border text-theme-muted hover:border-primary-500/40 hover:text-primary-500 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Profile photo ── */}
          <div className="relative flex-shrink-0">
            {/* Spinning decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full border border-primary-500/20 animate-spin-slow" />
              <div className="absolute w-56 h-56 rounded-full border border-accent-500/15 animate-spin-slow [animation-direction:reverse]" />
            </div>

            {/* Photo circle */}
            <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-theme-card shadow-2xl shadow-primary-500/20 ring-2 ring-primary-500/30">
              <Image
                src="/assets/images/prasanna-profile.png"
                alt="Prasanna Poovelu — Front-End Developer"
                fill
                sizes="208px"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating stat badges */}
            <div className="absolute -top-3 -right-3 bg-theme-card border border-theme-border rounded-xl px-3 py-2 text-center shadow-theme">
              <p className="text-primary-500 font-bold text-lg leading-none">5+</p>
              <p className="text-theme-subtle text-xs">Years Exp</p>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-theme-card border border-theme-border rounded-xl px-3 py-2 text-center shadow-theme">
              <p className="text-amber-500 font-bold text-lg leading-none">🏆</p>
              <p className="text-theme-subtle text-xs">Insta Award</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
          <span className="text-xs text-theme-subtle">Scroll</span>
          <svg className="w-4 h-4 text-theme-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
