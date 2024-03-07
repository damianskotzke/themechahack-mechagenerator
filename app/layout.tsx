import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

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
  description:
    "Create your own mecha and immerse yourself in the action-packed world of The Mecha Hack tabletop RPG. Battle against kaiju, engage in thrilling space conflicts, or enjoy classic mecha battles.",
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
        <Analytics />
      </body>
    </html>
  );
}
