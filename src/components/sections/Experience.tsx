import { experiences } from "@/data/experience";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        label="Career"
        title="Work Experience"
        subtitle="A track record of delivering scalable frontends across enterprise, healthcare, and startup environments."
      />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/60 via-dark-border to-transparent hidden sm:block" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative sm:pl-16">
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? "bg-primary-500 border-primary-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                      : "bg-dark-card border-dark-border"
                  }`}
                />
              </div>

              {/* Card */}
              <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-white font-semibold text-lg">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <Badge variant="success" size="sm">
                          Current
                        </Badge>
                      )}
                    </div>
                    <p className="text-primary-400 font-medium">{exp.company}</p>
                    <p className="text-slate-500 text-sm">{exp.location}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Badge variant="outline" size="sm">
                      {exp.period}
                    </Badge>
                    {index === 0 && (
                      <span className="ml-2 text-xs text-slate-500">
                        ~{Math.floor((new Date().getFullYear() - 2024) * 12 + new Date().getMonth() - 5)}+ months
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Tag */}
                {exp.project && (
                  <div className="mb-4 flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-slate-500">Project:</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-400 border border-primary-500/20">
                      {exp.project}
                    </span>
                  </div>
                )}

                {/* Responsibilities */}
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-2.5 text-sm">
                      <span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>
                      <span className="text-slate-400 leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Award */}
                {exp.award && (
                  <div className="mt-4 flex items-start gap-2.5 bg-amber-500/5 border border-amber-500/20 rounded-lg p-3">
                    <span className="text-amber-400 flex-shrink-0">🏆</span>
                    <p className="text-amber-400/90 text-xs leading-relaxed">
                      {exp.award}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
