"use client";

import { useState } from "react";
import { recommendations } from "@/data/recommendations";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Recommendations() {
  const [active, setActive] = useState(0);
  const current = recommendations[active];

  return (
    <SectionWrapper id="recommendations" darker>
      <SectionHeading
        label="Testimonials"
        title="What Colleagues Say"
        subtitle="Feedback from teammates, managers, and collaborators at Infosys and Mediwave Digital."
      />

      {/* LinkedIn note */}
      <div className="flex items-center justify-center gap-2 mb-10">
        <span className="text-xs text-slate-500">Sourced from</span>
        <a
          href="https://linkedin.com/in/prasanna-poovelu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a66c2]/10 border border-[#0a66c2]/20 text-[#60a5fa] text-xs font-medium hover:bg-[#0a66c2]/20 transition-colors"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn Recommendations
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Sidebar – recommenders */}
        <div className="space-y-3">
          {recommendations.map((rec, i) => (
            <button
              key={rec.id}
              onClick={() => setActive(i)}
              className={`w-full text-left flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${
                i === active
                  ? "bg-primary-500/10 border-primary-500/40 shadow-lg shadow-primary-500/10"
                  : "bg-dark-card border-dark-border hover:border-dark-border/80 hover:bg-dark-card/80"
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 transition-colors ${
                  i === active
                    ? "bg-primary-600 text-white"
                    : "bg-dark-surface text-slate-400"
                }`}
              >
                {rec.avatar}
              </div>
              <div className="min-w-0">
                <p
                  className={`text-sm font-medium truncate transition-colors ${
                    i === active ? "text-white" : "text-slate-300"
                  }`}
                >
                  {rec.name}
                </p>
                <p className="text-slate-500 text-xs truncate">{rec.role}</p>
                <p className="text-slate-600 text-xs truncate">{rec.company}</p>
              </div>
              {i === active && (
                <svg
                  className="w-4 h-4 text-primary-400 flex-shrink-0 ml-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Main recommendation card */}
        <div className="lg:col-span-2">
          <div className="bg-dark-card border border-dark-border rounded-2xl p-8 relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-4 right-6 text-8xl text-primary-500/5 font-serif leading-none select-none">
              "
            </div>

            {/* Relation */}
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-5 font-medium">
              {current.relation}
            </p>

            {/* Quote */}
            <blockquote className="text-slate-300 text-base leading-relaxed mb-6 relative z-10">
              &ldquo;{current.text}&rdquo;
            </blockquote>

            {/* Divider */}
            <div className="h-px bg-dark-border mb-6" />

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center font-bold text-white">
                  {current.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{current.name}</p>
                  <p className="text-primary-400 text-sm">{current.role}</p>
                  <p className="text-slate-500 text-xs">{current.company}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-slate-500 text-xs">{current.date}</p>
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-2 mt-5">
            {recommendations.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === active
                    ? "w-6 h-2 bg-primary-500"
                    : "w-2 h-2 bg-dark-border hover:bg-slate-500"
                }`}
                aria-label={`Recommendation ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
