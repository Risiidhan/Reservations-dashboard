import * as Sentry from "@sentry/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { isSentryEnabled } from "@/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export function generateMetadata(): Metadata {
  return {
    title: "ReservationZ",
    other: {
      ...(isSentryEnabled() && Sentry.getTraceData()),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
