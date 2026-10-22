import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AquaTrack",
  description: "Water refilling station ordering and delivery system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-sky-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}