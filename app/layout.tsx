import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Palanquin } from "next/font/google";
import { TracingBeam } from "@/components/ui/tracing-beam";


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
        <TracingBeam className="px-4">
          <div className="relative w-full flex items-center justify-center flex-col">
            <Navbar />
            <div className="mt-10 w-full">
              {children}
            </div>
          </div>
        </TracingBeam>
      </body>
    </html>
  );
}
