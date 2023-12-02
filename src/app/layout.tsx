import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Social from "./components/social";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atorrez007 | Professional Portfolio",
  description: "Armando is a full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-violet-200 to-pink-200 text-gray-950 relative min-h-screen container max-w-4xl mx-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
