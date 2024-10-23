import Footer from "@/components/ui/footer";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { FloatingNav } from "@/components/ui/floating-nav-bar";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jeffrey's Portfolio",
  description: "Generated by create next app",
};

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={cn(
        "min-h-[80rem] bg-background font-sans antialiased",
        fontSans.variable
       )}
      >
        <FloatingNav navItems={navItems}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
