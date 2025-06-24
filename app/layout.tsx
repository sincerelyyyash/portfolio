import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Palanquin } from "next/font/google";
// import { TracingBeam } from "@/components/ui/tracing-beam";
import { Analytics } from "@vercel/analytics/react"

const palanquin = Palanquin({
  subsets: ["latin"],
  variable: "--font-palanquin",
  weight: ["100", "200", "300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Yash Thakur - Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects, publications, and experience.",
  
  
  openGraph: {
    title: "Yash Thakur - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects, publications, and experience.",
    url: "https://sincerelyyyash.com", 
    siteName: "Yash Thakur Portfolio",
    images: [
      {
        url: "/assets/images/portfolio.png", 
        width: 1200,
        height: 630,
        alt: "Yash Thakur - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yash Thakur - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects, publications, and experience.",
    images: ["/assets/images/portfolio.png"], 
    creator: "@sincerelyyyash", 
  },

  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Yash Thakur"
  ],
  
  authors: [{ name: "Yash Thakur" }],
  creator: "Yash Thakur",
  

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={palanquin.className}>
        <Analytics />
        {/* <div className="px-8 lg:px-20"> */}
          <div className="relative w-full flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8">
            <Navbar />
            <div className="mt-24 w-full max-w-7xl">
              {children}
            </div>
          </div>
        {/* </div> */}
      </body>
    </html>
  );
}

