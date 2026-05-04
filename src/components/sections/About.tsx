import { profile, languages, achievements } from "@/data/profile";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const stats = [
  { value: "5+",  label: "Years Experience" },
  { value: "30%", label: "Performance Boost" },
  { value: "40%", label: "Dev Time Saved" },
  { value: "3",   label: "Companies" },
];

export default function About() {
  return (
    <SectionWrapper id="about" darker>
      <SectionHeading
        label="About Me"
        title="Passionate About Building Great UIs"
        subtitle="From Puducherry to Chennai — crafting enterprise-grade frontends that users love."
      />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Summary */}
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <h3 className="text-theme-base font-semibold mb-3 flex items-center gap-2 text-lg">
              <span className="text-primary-500">👤</span> My Story
            </h3>
            <p className="text-theme-muted leading-relaxed text-sm">{profile.summary}</p>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center py-4">
                <p className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-theme-subtle text-xs mt-1">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <Card>
            <h3 className="text-theme-base font-semibold mb-4 flex items-center gap-2 text-lg">
              🏅 Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((ach) => (
                <div key={ach.title} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{ach.icon}</span>
                  <div>
                    <p className="text-theme-base font-medium text-sm">{ach.title}</p>
                    <p className="text-theme-muted text-xs mt-0.5 leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Languages */}
          <Card>
            <h3 className="text-theme-base font-semibold mb-4 text-lg">🌍 Languages</h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-theme-muted text-sm">{lang.name}</span>
                    <span className="text-theme-subtle text-xs">{lang.level}</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${
                          dot <= lang.proficiency ? "bg-primary-500" : "bg-theme-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
