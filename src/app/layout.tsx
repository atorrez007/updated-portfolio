import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Providers from "../app/providers";
import ThemeSwitcher from "../app/ThemeSwitcher";
import Social from "./components/social";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

const space = Space_Grotesk({
  subsets: ["latin"],
});

// dark:bg-gradient-to-b dark:from-slate900 dark:to-slate200
export const metadata: Metadata = {
  title: "Atorrez007 | Professional Portfolio",
  description: "Armando is a full-stack developer",
};
// bg-gradient-to-r from-violet-200 to-pink-200
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${space.className} dark:text-white bg-gradient-to-r from-violet200 to-pink200 dark:bg-gradient-to-b dark:from-darkMode dark:to-darkMode
         text-gray-950 relative min-h-screen container max-w-4xl mx-auto`}
      >
        <Providers>
          <ThemeSwitcher />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
