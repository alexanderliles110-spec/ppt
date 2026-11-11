import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ICT & TPACK | Presentation",
  description: "An interactive presentation on Basic Concepts in ICT & TPACK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-100 text-slate-900 font-sans overflow-x-hidden selection:bg-blue-500/20 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
