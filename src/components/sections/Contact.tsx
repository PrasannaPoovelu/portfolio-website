import { profile } from "@/data/profile";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const contactLinks = [
  {
    icon: "📧",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    description: "Best way to reach me",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "prasanna-poovelu",
    href: profile.linkedin,
    description: "Connect professionally",
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "PrasannaPoovelu",
    href: profile.github,
    description: "See my code",
  },
  {
    icon: "📱",
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    description: "Available during IST hours",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading
        label="Contact"
        title="Let&apos;s Work Together"
        subtitle="Open to senior frontend roles, contract projects, and exciting product teams. Let's talk!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Message */}
        <div className="space-y-6">
          <div className="bg-theme-card border border-theme-border rounded-xl p-6">
            <h3 className="text-theme-base font-semibold text-lg mb-3">
              🚀 What I Bring
            </h3>
            <ul className="space-y-2.5 text-sm text-theme-muted">
              {[
                "5+ years of React + TypeScript expertise in enterprise environments",
                "Proven track record at Infosys (Barclays) and Mediwave Digital",
                "Strong focus on performance, accessibility, and clean architecture",
                "Agile team player — skilled at cross-team collaboration and mentoring",
                "Fluent in English & Tamil, basic German/French",
                "Passport valid till 2035 — open to relocation / remote roles",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-xl p-5 text-center">
            <p className="text-theme-muted text-sm leading-relaxed mb-4">
              Currently open to{" "}
              <span className="text-primary-500 font-medium">
                Senior Frontend Developer
              </span>{" "}
              and{" "}
              <span className="text-accent-500 font-medium">
                Lead Engineer
              </span>{" "}
              positions. Based in Puducherry, open to remote or relocation.
            </p>
            <p className="text-theme-subtle text-xs mb-3">
              📬 Reach out to discuss availability — happy to chat!
            </p>
            <a
              href="https://wa.me/918015411102"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp: +91 80154 11102
            </a>
          </div>
        </div>

        {/* Right: Links */}
        <div className="space-y-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 bg-theme-card border border-theme-border rounded-xl p-5 hover:border-primary-500/40 hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <span className="text-3xl flex-shrink-0">{link.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-theme-subtle text-xs uppercase tracking-wider mb-0.5">
                  {link.label}
                </p>
                <p className="text-theme-base font-medium truncate group-hover:text-primary-400 transition-colors">
                  {link.value}
                </p>
                <p className="text-theme-subtle text-xs">{link.description}</p>
              </div>
              {link.label !== "Phone" && (
                <svg
                  className="w-5 h-5 text-theme-subtle group-hover:text-primary-400 transition-colors flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
