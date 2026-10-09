import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./mobile.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    "https://priyadarshan-yogendram.vercel.app"
  ),

  title: {
    default:
      "Priyadarshan Yogendram | Full-Stack Developer & Web Designer",
    template: "%s | Priyadarshan Yogendram",
  },

  description:
    "Portfolio of Priyadarshan Yogendram, a full-stack developer, web designer, UI/UX designer and social media marketer creating modern, responsive and interactive digital experiences for businesses and brands worldwide.",

  keywords: [
    "Priyadarshan Yogendram",
    "Priyadarshan Yogendram Portfolio",
    "Priyadarshan Portfolio",
    "Full Stack Developer",
    "Full Stack Web Developer",
    "Web Developer",
    "Web Designer",
    "Freelance Web Developer",
    "Freelance Web Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "UI UX Designer",
    "UI Designer",
    "UX Designer",
    "Responsive Web Design",
    "Website Development",
    "Website Designer",
    "Modern Website Design",
    "Business Website Development",
    "Ecommerce Website Development",
    "Landing Page Designer",
    "Digital Experience Designer",
    "Social Media Marketing",
    "Social Media Marketer",
    "Digital Marketing",
    "International Web Developer",
    "International Web Designer",
    "Remote Web Developer",
    "Remote Web Designer",
  ],

  authors: [
    {
      name: "Priyadarshan Yogendram",
      url: "https://priyadarshan-yogendram.vercel.app",
    },
  ],

  creator: "Priyadarshan Yogendram",
  publisher: "Priyadarshan Yogendram",

  category: "technology",

  applicationName:
    "Priyadarshan Yogendram Portfolio",

  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://priyadarshan-yogendram.vercel.app",
    locale: "en_US",

    title:
      "Priyadarshan Yogendram | Full-Stack Developer & Web Designer",

    description:
      "Full-stack developer, web designer, UI/UX designer and social media marketer creating modern digital experiences for businesses and brands worldwide.",

    siteName: "Priyadarshan Yogendram",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Priyadarshan Yogendram — Full-Stack Developer, Web Designer and UI/UX Designer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Priyadarshan Yogendram | Full-Stack Developer & Web Designer",

    description:
      "Full-stack developer, web designer, UI/UX designer and social media marketer creating modern digital experiences for businesses and brands worldwide.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  "@id":
    "https://priyadarshan-yogendram.vercel.app/#person",

  name: "Priyadarshan Yogendram",

  url:
    "https://priyadarshan-yogendram.vercel.app",

  image:
    "https://priyadarshan-yogendram.vercel.app/og-image.png",

  jobTitle: [
    "Full-Stack Developer",
    "Web Designer",
    "UI/UX Designer",
  ],

  address: {
    "@type": "PostalAddress",
    addressCountry: "MT",
  },

  knowsAbout: [
    "Web Design",
    "Web Development",
    "Full-Stack Development",
    "Front-End Development",
    "UI Design",
    "UX Design",
    "Responsive Web Design",
    "Next.js",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "Social Media Marketing",
    "Digital Marketing",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id":
    "https://priyadarshan-yogendram.vercel.app/#website",

  url:
    "https://priyadarshan-yogendram.vercel.app",

  name: "Priyadarshan Yogendram",

  description:
    "Portfolio of Priyadarshan Yogendram, a full-stack developer, web designer and UI/UX designer creating modern digital experiences.",

  inLanguage: "en",

  publisher: {
    "@id":
      "https://priyadarshan-yogendram.vercel.app/#person",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {/* PERSON STRUCTURED DATA */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {/* WEBSITE STRUCTURED DATA */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}