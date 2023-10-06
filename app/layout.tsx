import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leonardo Dev",
  description: "Creative Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading/>}>
        <Menu />
        {children}
        <Footer />
        </Suspense>
      </body>
    </html>
  );
}
