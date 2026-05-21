import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kunj Vaghani | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in AI integrations, scalable backend systems, and modern interactive frontend experiences.",
  keywords: [
    "Kunj Vaghani",
    "Full Stack Developer",
    "AI ML",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Kunj Vaghani" }],
  openGraph: {
    title: "Kunj Vaghani | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in AI integrations, scalable backend systems, and modern interactive frontend experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
