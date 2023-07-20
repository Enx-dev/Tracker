import { AuthWrapper } from "@/app/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracker",
  description: "The Simplest Advanced TODO Out There",
  authors: [
    {
      name: "Adejori Eniola",
      url: "https://github.com/Enx_dev",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthWrapper>
      <html lang="en">
        <body className="min-h-screen">{children}</body>
      </html>
    </AuthWrapper>
  );
}
