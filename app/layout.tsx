import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Palanquin } from "next/font/google";


const palanquin = Palanquin({
  subsets: ["latin"],
  variable: "--font-palanquin",
  weight: ["100", "200", "300", "400", "500", "600"]
})
export const metadata: Metadata = {
  title: "Yash Thakur",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={palanquin.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
          <div className="mt-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
