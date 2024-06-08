import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "../globals.css";

export const metadata: Metadata = {
  title: "PayHam",
  description: "Social Payments as a Service",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {/* SIDEBAR */}
        {children}
      </body>
    </html>
  );
}
