import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: [ "latin" ],
  variable: "--font-poppins",
  weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900" ]
});

export const metadata: Metadata = {
  title: "Mr Tee",
  description: "Discover Mr Tee Luxury Store's exquisite collection of male and female clothing and footwear. Perfect for those who appreciate high-quality fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
