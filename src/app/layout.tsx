import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vijay Paderthi - Author & Storyteller",
  description: "Welcome to the official website of author Vijay Paderthi. Discover books, stories, and insights from a passionate storyteller.",
  keywords: ["Vijay Paderthi", "author", "books", "storyteller", "writer", "literature"],
  authors: [{ name: "Vijay Paderthi" }],
  creator: "Vijay Paderthi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vijaypaderthi.com",
    title: "Vijay Paderthi - Author & Storyteller",
    description: "Welcome to the official website of author Vijay Paderthi. Discover books, stories, and insights from a passionate storyteller.",
    siteName: "Vijay Paderthi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijay Paderthi - Author & Storyteller",
    description: "Welcome to the official website of author Vijay Paderthi. Discover books, stories, and insights from a passionate storyteller.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
