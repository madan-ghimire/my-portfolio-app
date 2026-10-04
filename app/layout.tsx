import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";
import Script from "next/script";
import CustomCursor from "@/components/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Bare domain redirects to www on Vercel, so www is the canonical address.
const SITE_URL = "https://www.madanghimire.info.np";
const JOB_TITLE = "Full Stack Software Developer";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // e.g. G-XXXXXXXXXX (set in Vercel env vars)

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  title: {
    default: "Madan Ghimire | Full Stack Developer in Lalitpur, Nepal",
    template: "%s | Madan Ghimire",
  },
  description:
    "Madan Ghimire is a Full Stack Developer in Lalitpur, Nepal with 5+ years of experience in React, Next.js, TypeScript and Node.js. View projects and get in touch.",
  keywords: [
    "Madan Ghimire",
    "Madan Ghimire Nepal",
    "Full Stack Software Developer Nepal",
    "Software Developer Nepal",
    "Software Developer Lalitpur",
    "Next.js Developer Nepal",
    "React Developer Nepal",
    "TypeScript Developer",
    "Frontend Developer Nepal",
    "Backend Developer Nepal",
    "Node.js Developer Nepal",
    "MERN Stack Developer",
    "SaaS Developer",
    "Prisma ORM",
    "Tailwind CSS",
    // Search-term variants people commonly type
    "Full Stack Developer Nepal",
    "React Developer Nepal",
  ],
  authors: [
    {
      name: "Madan Ghimire",
      url: "https://www.linkedin.com/in/madan-ghimire-21416a143/",
    },
  ],
  creator: "Madan Ghimire",
  publisher: "Madan Ghimire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `Madan Ghimire | ${JOB_TITLE} from Nepal`,
    description:
      "Full Stack Software Developer from Lalitpur, Nepal building scalable web applications with React.js, Next.js, and modern technologies. View my portfolio and projects.",
    url: SITE_URL,
    siteName: "Madan Ghimire Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // must exist in /public
        width: 1200,
        height: 630,
        alt: `Madan Ghimire - ${JOB_TITLE} Portfolio`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Madan Ghimire | ${JOB_TITLE} from Nepal`,
    description:
      "Full Stack Software Developer building scalable SaaS applications with Next.js, React, TypeScript, and modern web technologies.",
    creator: "@madan__ghimire",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "portfolio",
  other: {
    linkedin: "https://www.linkedin.com/in/madan-ghimire-21416a143/",
    twitter: "https://x.com/madan__ghimire",
    github: "https://github.com/madan-ghimire",
    location: "Lalitpur, Nepal",
    profession: JOB_TITLE,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Madan Ghimire",
  jobTitle: JOB_TITLE,
  description:
    "Full Stack Software Developer from Lalitpur, Nepal specializing in modern web technologies",
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lalitpur",
    addressRegion: "Bagmati Province",
    addressCountry: "Nepal",
  },
  sameAs: [
    "https://www.linkedin.com/in/madan-ghimire-21416a143/",
    "https://x.com/madan__ghimire",
    "https://github.com/madan-ghimire",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Full Stack Development",
    "Software Engineering",
    "SaaS Development",
    "Prisma ORM",
    "Tailwind CSS",
  ],
  // TODO (from resume): add your current employer, e.g.
  // worksFor: { "@type": "Organization", name: "Company Name" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Geo Tags */}
        <meta name="geo.region" content="NP-03" />
        <meta name="geo.placename" content="Lalitpur, Nepal" />
        <meta name="geo.position" content="27.6588;85.3247" />
        <meta name="ICBM" content="27.6588, 85.3247" />

        {/* Professional Tags */}
        <meta name="profession" content={JOB_TITLE} />
        <meta
          name="specialization"
          content="React.js, Next.js, TypeScript, Node.js, Express.js"
        />
        <meta name="experience" content="Full Stack Software Engineering" />

        {/* Verification Tags (add when you get them) */}
        {/* <meta name="google-site-verification" content="your-google-verification-code" /> */}

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>

        {/* Google Analytics: only loads when NEXT_PUBLIC_GA_ID is set */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_title: 'Madan Ghimire Portfolio',
                  page_location: window.location.href
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
