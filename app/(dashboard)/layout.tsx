import LeftSideBar from "@/components/dashboard/layout/left-side-bar";
import TopBar from "@/components/dashboard/layout/top-bar";
import { ToasterProvider } from "@/providers/ToasterProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mr Tee Admin",
  description:
    "The secure area to manage all admin related features for Mr Tee, such as Create, Update and Delete content on the frontend.",
  icons: {
    icon: "/images/logo.png",
  },
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToasterProvider />
      <div className="flex max-lg:flex-col text-gray-500">
        <LeftSideBar />
        <TopBar />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;