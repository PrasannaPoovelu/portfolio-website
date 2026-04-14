import { profile, languages, achievements } from "@/data/profile";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30%", label: "Performance Boost" },
  { value: "40%", label: "Dev Time Saved" },
  { value: "3", label: "Companies" },
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
        {/* Summary – wider column */}
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-lg">
              <span className="text-primary-400">👤</span> My Story
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {profile.summary}
            </p>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center py-4">
                <p className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <Card>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-lg">
              <span>🏅</span> Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((ach) => (
                <div key={ach.title} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{ach.icon}</span>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {ach.title}
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Info */}
          <Card>
            <h3 className="text-white font-semibold mb-4 text-lg">
              📬 Contact
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { icon: "📧", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                { icon: "📱", label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
                { icon: "📍", label: "Location", value: profile.location },
                { icon: "🌐", label: "LinkedIn", value: "prasanna-poovelu", href: profile.linkedin },
                { icon: "💻", label: "GitHub", value: "PrasannaPoovelu", href: profile.github },
                { icon: "🛂", label: "Passport", value: profile.passportValidity },
              ].map((item) => (
                <li key={item.label} className="flex gap-2 items-start">
                  <span className="flex-shrink-0">{item.icon}</span>
                  <div>
                    <span className="text-slate-500">{item.label}: </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary-400 hover:text-primary-300 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-300">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          {/* Languages */}
          <Card>
            <h3 className="text-white font-semibold mb-4 text-lg">
              🌍 Languages
            </h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 text-sm">{lang.name}</span>
                    <span className="text-slate-500 text-xs">{lang.level}</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${
                          dot <= lang.proficiency
                            ? "bg-primary-500"
                            : "bg-dark-border"
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
