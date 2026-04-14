"use client";

import { profile } from "@/data/profile";

const techStack = [
  "React.js",
  "TypeScript",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-dark-bg overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              Open to Opportunities
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent">
                Prasanna
              </span>
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium mb-2">
              {profile.title} &nbsp;·&nbsp;
              <span className="text-primary-400">{profile.tagline}</span>
            </p>

            {/* Tagline */}
            <p className="text-slate-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              5+ years building scalable enterprise UIs. Currently crafting
              high-performance React + TypeScript applications at{" "}
              <span className="text-white font-medium">Infosys</span> for{" "}
              <span className="text-primary-400 font-medium">Barclays</span>.
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
                className="px-6 py-3 rounded-lg border border-primary-500/40 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400 font-semibold text-sm transition-all duration-200"
              >
                Get In Touch
              </button>
              <a
                href="mailto:prasanna.poovelu23@gmail.com"
                className="px-6 py-3 rounded-lg border border-dark-border text-slate-400 hover:text-white hover:bg-white/5 font-semibold text-sm transition-all duration-200"
              >
                Download CV
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="text-xs text-slate-500 self-center mr-1">
                Core Stack:
              </span>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-dark-card border border-dark-border text-slate-300 hover:border-primary-500/40 hover:text-primary-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right – Avatar / Visual */}
          <div className="relative flex-shrink-0">
            {/* Spinning rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border border-primary-500/10 animate-spin-slow" />
              <div className="absolute w-56 h-56 rounded-full border border-accent-500/10 animate-spin-slow [animation-direction:reverse]" />
            </div>

            {/* Avatar */}
            <div className="relative w-52 h-52 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center shadow-2xl shadow-primary-500/30 overflow-hidden border-4 border-dark-bg">
              <span className="text-white text-6xl font-bold select-none">
                PP
              </span>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-3 -right-3 bg-dark-card border border-dark-border rounded-xl px-3 py-2 text-center shadow-xl">
              <p className="text-primary-400 font-bold text-lg leading-none">
                5+
              </p>
              <p className="text-slate-400 text-xs">Years Exp</p>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-dark-card border border-dark-border rounded-xl px-3 py-2 text-center shadow-xl">
              <p className="text-accent-400 font-bold text-lg leading-none">
                🏆
              </p>
              <p className="text-slate-400 text-xs">Insta Award</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow opacity-50">
          <span className="text-xs text-slate-500">Scroll</span>
          <svg
            className="w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
