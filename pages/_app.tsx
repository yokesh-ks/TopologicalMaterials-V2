"use client";

import "../styles/globals.css";
import { ThemeProvider } from "@/components/providers";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </div>
  );
}

export default MyApp;
