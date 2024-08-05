import Footer from "@/components/frontend/layout/footer";
import Navbar from "@/components/frontend/layout/navbar";
import { ToasterProvider } from "@/providers/ToasterProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mr Tee Luxury Store",
  description:
    "Experience unparalleled elegance with Mr Tee Luxury Store. Our fashion house specializes in high-quality male and female clothing and footwear. Discover a curated selection of stylish and sophisticated pieces perfect for any occasion.",
  keywords:
    "Mr Tee Luxury Store, Fashion, Male Clothing, Female Clothing, Footwear, High-Quality Fashion, Stylish Clothing, Sophisticated Fashion, Men's Fashion, Women's Fashion",
  twitter: {
    title: "Mr Tee Luxury Store",
    description:
      "Explore Mr Tee Luxury Store for high-quality male and female clothing and footwear. Elevate your style with our curated fashion pieces.",
    siteId: "https://www.mrtee.com",
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
  },
  openGraph: {
    type: "website",
    url: "https://mrtee.com",
    title: "Mr Tee Luxury Store",
    description:
      "Discover Mr Tee Luxury Store's exquisite collection of male and female clothing and footwear. Perfect for those who appreciate high-quality fashion.",
    siteName: "Mr Tee",
    images: [
      {
        url: "/images/logo.png",
      },
    ],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToasterProvider />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;