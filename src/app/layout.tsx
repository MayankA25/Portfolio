import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MainComponent from "@/components/MainComponent/MainComponent";
import Providers from "./providers/ThemeProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain

  title: {
    default: "Mayank Arora | Full Stack Developer",
    template: "%s | Mayank Arora",
  },

  description:
    "Portfolio of Mayank Arora, a Full Stack Developer specializing in MERN, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, Redis, and scalable backend systems.",

  keywords: [
    "Mayank Arora",
    "Full Stack Developer",
    "Backend Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Software Engineer",
    "Portfolio",
  ],

  authors: [{ name: "Mayank Arora" }],
  creator: "Mayank Arora",

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Mayank Arora | Full Stack Developer",
    description:
      "Explore projects, experience, and skills in full-stack web development with a focus on scalable backend systems.",
    url: "/",
    siteName: "Mayank Arora Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mayank Arora | Full Stack Developer",
    description:
      "Portfolio showcasing full-stack and backend development projects.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#e5e5e5",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#171717",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      date-scroll-behaviour="smooth"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <Providers>
          <div id="top" className=""></div>
          <Header />
          <MainComponent>{children}</MainComponent>
          <Footer />
        </Providers>
        <Toaster/>
      </body>
    </html>
  );
}
