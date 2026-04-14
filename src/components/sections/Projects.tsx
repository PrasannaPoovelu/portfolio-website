import { projects } from "@/data/projects";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

const categoryColors: Record<string, string> = {
  Enterprise: "primary",
  Healthcare: "accent",
  Web: "success",
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" darker>
      <SectionHeading
        label="Portfolio"
        title="Key Projects"
        subtitle="Real-world applications built at scale — from enterprise banking systems to healthcare platforms."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group bg-theme-card border border-theme-border rounded-xl p-6 hover:border-primary-500/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 flex flex-col ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-theme-base font-semibold text-lg group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
              </div>
              <Badge
                variant={
                  (categoryColors[project.category] as
                    | "primary"
                    | "accent"
                    | "success") || "default"
                }
                size="sm"
              >
                {project.category}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-theme-muted text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-5 flex-1">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-primary-500 flex-shrink-0 mt-0.5">▸</span>
                  <span className="text-theme-muted">{h}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div>
              <p className="text-xs text-theme-subtle mb-2 font-medium uppercase tracking-wider">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-theme-surface border border-theme-border text-theme-muted hover:border-primary-500/30 hover:text-primary-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
