import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/main/StarBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naman's Portfolio",
  description: "This is Naman's portfolio website",
  icons: {
    icon: "/Logo.png",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-black overflow-y-scroll overflow-x-hidden`}>
        {/* Add relative and negative z-index to StarBackground */}
        <div className="relative z-[-10]"> {/* Adjust z-index as needed, make sure it's negative */}
          <StarBackground />
        </div>
        {/* Ensure children are rendered 'above' the background */}
        <div className="relative z-1"> {/* Or just relative if StarBackground is negative */}
          {children}
        </div>
      </body>
    </html>
  );
}
