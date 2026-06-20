import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { ParticlesBackground } from "@/components/particles-background";
import { Footer } from "@/components/footer";
import { getPersonalInfo } from "@/lib/config";
import { Toaster } from "@/components/ui/toaster";
import { ScrollIndicator } from "@/components/scroll-indicator";

const inter = Inter({
  subsets: ["latin"],
});

const personalInfo = getPersonalInfo();

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          

          {/* Aurora Background */}
          <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
            <div
              className="
                absolute
                -top-72
                -left-72
                w-[900px]
                h-[900px]
                rounded-full
                bg-cyan-500/15
                blur-[180px]
                animate-pulse
              "
            />

            <div
              className="
                absolute
                -bottom-72
                -right-72
                w-[900px]
                h-[900px]
                rounded-full
                bg-blue-500/15
                blur-[180px]
                animate-pulse
              "
            />

            <div
              className="
                absolute
                top-1/3
                left-1/2
                -translate-x-1/2
                w-[700px]
                h-[700px]
                rounded-full
                bg-teal-500/10
                blur-[160px]
                animate-pulse
              "
            />
          </div>

          {/* Floating Particles */}
          <ParticlesBackground />

          <Navbar />

          <ScrollIndicator />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}