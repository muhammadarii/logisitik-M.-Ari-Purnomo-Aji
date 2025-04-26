import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/parts/Navbar";
import { LayoutStore } from "./LayoutStore";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "L O G I X",
  description: "Simple and fast logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <LayoutStore>
          <Navbar />
          <div className="mt-[70px]">{children}</div>
        </LayoutStore>
      </body>
    </html>
  );
}
