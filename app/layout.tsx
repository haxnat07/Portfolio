import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hasnat Ahmad | Full Stack Developer",
  description:
    "Full stack engineer with 3+ years of experience building scalable web platforms and backend systems in fintech and SaaS.",
  keywords: [
    "Full Stack Developer",
    "Django Developer",
    "React Developer",
    "Backend Engineer",
    "Python Developer",
    "Hasnat Ahmad",
  ],
  openGraph: {
    title: "Hasnat Ahmad | Full Stack Developer",
    description: "Building scalable platforms with Django, React & Python.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
