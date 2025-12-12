import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Shashank | Full Stack Developer",
    template: "%s | Shashank",
  },
  description:
    "Portfolio of Shashank — Full-Stack Developer specializing in Next.js, React, Android/iOS development, and Blockchain.",
  
  keywords: [
    "Shashank",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Blockchain Developer",
    "Android Developer",
    "iOS Developer",
    "Portfolio",
  ],

  authors: [{ name: "Shashank" }],

  openGraph: {
    title: "Shashank | Developer Portfolio",
    description:
      "Explore Shashank's projects in Web Development, Mobile Apps, Blockchain, and AI.",
    url: "https://yourdomain.com", // change when deployed
    siteName: "Shashank Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shashank Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shashank | Developer Portfolio",
    description:
      "Explore Shashank's projects in Web, Mobile, and Blockchain development.",
    images: ["/og-image.png"],
  },

  icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon-32x32.png",
  apple: "/apple-touch-icon.png",
},

    manifest: "/site.webmanifest",

  metadataBase: new URL("https://yourdomain.com"), // update after Vercel deploy
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="fixed inset-0 -z-10 overflow-hidden">
         {/* Blue Blob */}
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-blue-500/30 blur-[150px] rounded-full animate-blob" />

          {/* Purple Blob */}
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-500/30 blur-[150px] rounded-full animate-blob animation-delay-2000" />

          {/* Pink Blob */}
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-pink-500/20 blur-[150px] rounded-full animate-blob animation-delay-4000" />
      </div>

        <Navbar />
        {children}
      </body>
    </html>
  );
}