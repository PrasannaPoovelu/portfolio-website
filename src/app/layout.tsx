import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Prasanna Poovelu | Front-End Developer",
  description:
    "Senior Front-End Developer specializing in React.js and TypeScript. 5+ years building scalable enterprise UIs. Currently at Infosys (Barclays). Based in Puducherry, India.",
  keywords: [
    "Prasanna Poovelu",
    "Front-End Developer",
    "React.js",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Portfolio",
    "Infosys",
    "Barclays",
  ],
  authors: [{ name: "Prasanna Poovelu", url: "https://linkedin.com/in/prasanna-poovelu" }],
  openGraph: {
    title: "Prasanna Poovelu | Front-End Developer",
    description: "React.js & TypeScript specialist with 5+ years in enterprise UI development.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved || (prefersDark ? 'dark' : 'light');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-theme-page text-theme-base antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
