import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premanni Technologies | Digital capability for ambitious businesses",
  description: "Premanni brings strategy, technology, and marketing together to help ambitious businesses build lasting momentum.",
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
