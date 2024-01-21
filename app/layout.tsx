import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const myFont = localFont({
  src: [
    {
      path: "/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./JetBrainsMono-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "The Mecha Hack | Mecha Generator",
  description: "Generate your own mecha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${myFont.className} bg-stone-950 grid gap-2 p-2`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
