import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dienstbeginn",
  description: "Mobile Lernhilfe für die Basisausbildung.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
