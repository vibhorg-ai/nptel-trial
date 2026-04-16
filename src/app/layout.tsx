import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "NPTEL Affective Computing Prep",
  description:
    "Study and quiz platform for NPTEL Affective Computing course — learn concepts, practice questions, and track your progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
          NPTEL Affective Computing Prep &middot; Built for exam preparation
        </footer>
      </body>
    </html>
  );
}
