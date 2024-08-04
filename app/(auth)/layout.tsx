import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mr Tee Luxury Store AUthentication",
  description:
    "Discover Mr Tee Luxury Store's exquisite collection of male and female clothing and footwear. Perfect for those who appreciate high-quality fashion.",
  icons: {
    icon: "/images/logo.png",
  },
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center">
      {children}
    </div>
  );
}

export default Layout;