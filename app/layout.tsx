import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Madan Ghimire | Full Stack Developer from Nepal",
    template: "%s | Madan Ghimire",
  },
  description:
    "Madan Ghimire is a passionate Full Stack Developer from Lalitpur, Nepal specializing in React.js, Next.js, TypeScript, Node.js, and modern web technologies. Building scalable SaaS applications and elegant user interfaces.",
  keywords: [
    "Madan Ghimire",
    "Madan Ghimire Nepal",
    "Full Stack Developer Nepal",
    "Next.js Developer Nepal",
    "React Developer Nepal",
    "TypeScript Developer",
    "Prisma ORM Developer",
    "Tailwind CSS Expert",
    "SaaS Developer",
    "Web Developer Lalitpur",
    "Software Engineer Nepal",
    "Frontend Developer Nepal",
    "Backend Developer Nepal",
    "MERN Stack Developer",
    "JavaScript Developer Nepal",
    "Node.js Developer Nepal",
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
  metadataBase: new URL("https://my-portfolio-app-henna.vercel.app/"), // Replace with your actual domain
  alternates: {
    canonical: "https://my-portfolio-app-henna.vercel.app/", // Replace with your actual domain
  },
  openGraph: {
    title: "Madan Ghimire | Full Stack Developer from Nepal",
    description:
      "Passionate Full Stack Developer from Lalitpur, Nepal creating scalable web applications with React.js, Next.js, and modern technologies. View my portfolio and projects.",
    url: "https://my-portfolio-app-henna.vercel.app/", // Replace with your actual domain
    siteName: "Madan Ghimire Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Madan Ghimire - Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madan Ghimire | Full Stack Developer from Nepal",
    description:
      "Passionate Full Stack Developer creating scalable SaaS applications using Next.js, React, TypeScript, and modern web technologies.",
    creator: "@madan__ghimire",
    images: ["/og-image.jpg"], // Same image as OG
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
    profession: "Full Stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional Meta Tags for Better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />

        {/* Geo Tags */}
        <meta name="geo.region" content="NP-03" />
        <meta name="geo.placename" content="Lalitpur, Nepal" />
        <meta name="geo.position" content="27.6588;85.3247" />
        <meta name="ICBM" content="27.6588, 85.3247" />

        {/* Professional Tags */}
        <meta name="profession" content="Full Stack Developer" />
        <meta
          name="specialization"
          content="React.js, Next.js, TypeScript, Node.js"
        />
        <meta name="experience" content="Full Stack Web Development" />

        {/* Verification Tags (Add these when you get them) */}
        {/* <meta name="google-site-verification" content="your-google-verification-code" /> */}

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Madan Ghimire",
              jobTitle: "Full Stack Developer",
              description:
                "Passionate Full Stack Developer from Lalitpur, Nepal specializing in modern web technologies",
              url: "https://my-portfolio-app-henna.vercel.app/", // Replace with your domain
              image: "https://my-portfolio-app-henna.vercel.app//profile.jpg", // Replace with your domain
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
                "Web Development",
                "SaaS Development",
                "Prisma ORM",
                "Tailwind CSS",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance Developer",
              },
            }),
          }}
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
          {children}
        </ThemeProvider>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: 'Madan Ghimire Portfolio',
              page_location: window.location.href,
              custom_map: {
                'dimension1': 'Full Stack Developer',
                'dimension2': 'Nepal'
              }
            });
          `}
        </Script>

        {/* Google Tag Manager (Optional - alternative to GA) */}
        {/* <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script> */}
      </body>
    </html>
  );
}
