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
  metadataBase: new URL("https://yogendram.dev"),

  title: {
    default: "Yogendram Priyadarshan | Web Designer & Developer",
    template: "%s | Yogendram Priyadarshan",
  },

  description:
    "Portfolio of Yogendram Priyadarshan, a web designer and developer in Dubai creating modern, responsive and interactive digital experiences for businesses and brands.",

  keywords: [
    "Yogendram Priyadarshan",
    "Yogendram Portfolio",
    "Web Designer Dubai",
    "Web Developer Dubai",
    "Dubai Web Designer",
    "Dubai Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "UI UX Designer",
    "Responsive Web Design",
    "Website Designer UAE",
  ],

  authors: [
    {
      name: "Yogendram Priyadarshan",
    },
  ],

  creator: "Yogendram Priyadarshan",
  publisher: "Yogendram Priyadarshan",

  category: "technology",

  applicationName: "Yogendram Priyadarshan Portfolio",

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
    locale: "en_US",

    title: "Yogendram Priyadarshan | Web Designer & Developer",

    description:
      "Web designer and developer in Dubai creating modern, responsive and interactive digital experiences.",

    siteName: "Yogendram Priyadarshan",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yogendram Priyadarshan — Web Designer & Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Yogendram Priyadarshan | Web Designer & Developer",

    description:
      "Web designer and developer in Dubai creating modern, responsive and interactive digital experiences.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}