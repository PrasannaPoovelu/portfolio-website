import { skillCategories, certifications } from "@/data/skills";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="Expertise"
        title="Skills & Certifications"
        subtitle="A modern front-end toolkit — from core React & TypeScript to performance, testing, and DevOps practices."
      />

      {/* Skill Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
        {skillCategories.map((cat) => (
          <Card key={cat.category} hover className="h-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{cat.icon}</span>
              <h3 className="text-theme-base font-semibold text-sm">{cat.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs bg-theme-surface border border-theme-border text-theme-muted hover:text-primary-400 hover:border-primary-500/30 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-theme-base font-semibold text-xl mb-6 flex items-center gap-2">
          <span>🎓</span> Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <Card key={cert.title} hover glow className="relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/5 rounded-bl-full" />
              <div className="mb-3">
                <span className="text-3xl">📜</span>
              </div>
              <h4 className="text-theme-base font-semibold text-sm mb-1 leading-snug">
                {cert.title}
              </h4>
              <p className="text-primary-400 text-xs font-medium mb-1">
                {cert.issuer}
              </p>
              <p className="text-theme-subtle text-xs">{cert.date}</p>
              {cert.certNo && (
                <p className="text-theme-subtle text-xs mt-1 font-mono opacity-70">
                  ID: {cert.certNo}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-12">
        <h3 className="text-theme-base font-semibold text-xl mb-6 flex items-center gap-2">
          <span>🎓</span> Education
        </h3>
        <Card hover>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h4 className="text-theme-base font-semibold">
                Bachelor of Mechanical Engineering (B.E.)
              </h4>
              <p className="text-primary-400 text-sm">
                Regency Institute of Technology, Puducherry
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-theme-border text-theme-muted flex-shrink-0">
              2012 – 2016
            </span>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
