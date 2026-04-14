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
              <span className="text-primary-400 font-medium">
                Senior Frontend Developer
              </span>{" "}
              and{" "}
              <span className="text-accent-400 font-medium">
                Lead Engineer
              </span>{" "}
              positions. Based in Puducherry, open to remote or relocation.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available from June 2025
            </div>
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
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
