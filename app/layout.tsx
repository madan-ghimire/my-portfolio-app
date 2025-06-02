import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madan Ghimire | Full Stack Developer",
  description:
    "I'm Madan Ghimire, a full stack developer passionate about building modern SaaS applications using Next.js, TypeScript, Prisma, and PostgreSQL.",
  keywords: [
    "Madan Ghimire",
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Prisma ORM",
    "Tailwind CSS",
    "React Developer",
    "SaaS Developer",
    "Real Estate SaaS",
    "Multi-tenant Application",
    "Software Engineer in Nepal",
  ],
  authors: [
    {
      name: "Madan Ghimire",
      url: "https://www.linkedin.com/in/madan-ghimire-21416a143/",
    },
  ],
  creator: "Madan Ghimire",
  metadataBase: new URL("https://yourdomain.com"), // <-- Replace with your actual domain
  alternates: {
    canonical: "https://yourdomain.com", // <-- Replace with your actual domain
  },
  openGraph: {
    title: "Madan Ghimire | Full Stack Developer",
    description:
      "Explore the portfolio and projects of Madan Ghimire, a skilled full stack developer creating scalable SaaS applications.",
    url: "https://yourdomain.com", // <-- Replace with your actual domain
    siteName: "Madan Ghimire",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.linkedin.com/in/madan-ghimire-21416a143/", // <-- Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Madan Ghimire Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madan Ghimire | Full Stack Developer",
    description:
      "I build beautiful and scalable SaaS apps using modern web technologies like Next.js, Prisma, and PostgreSQL.",
    creator: "@madan__ghimire", // Twitter handle from your provided URL
    images: ["https://x.com/madan__ghimire"], // <-- Replace with actual OG image path
  },
  other: {
    linkedin: "https://www.linkedin.com/in/madan-ghimire-21416a143/",
    twitter: "https://x.com/madan__ghimire",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
