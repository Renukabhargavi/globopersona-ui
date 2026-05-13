import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar, Header } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Globopersona UI",
  description: "Redesigned UI for Globopersona project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <div className="flex flex-1 min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col relative w-full overflow-hidden">
            <Header />
            <main className="flex-1 p-8 overflow-y-auto w-full">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
