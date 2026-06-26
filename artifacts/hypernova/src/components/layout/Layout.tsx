import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background selection:bg-secondary selection:text-white">
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
