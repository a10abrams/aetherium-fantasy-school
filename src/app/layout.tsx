import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aetherium",
  description: "'Harmony in Diversity, Strength in Aetherium.' This magic school is a creative endeavour--not real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
