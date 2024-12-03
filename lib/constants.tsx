import { LayoutDashboard, Shapes, ShoppingBag, Tag, UserRound } from "lucide-react";

type MenuItem = {
  id: string;
  label: string;
  url: string;
  sub?: MenuItem[];
};

export const mainMenu: MenuItem[] = [
  {
    id: "1",
    label: "Home",
    url: "/",
  },
  {
    id: "2",
    label: "Luxury Store",
    url: "/category/luxury-store",
    sub: [
      {
        id: "2-1",
        label: "Shirts",
        url: "/category/categoryshirts",
        sub: [
          { id: "2-1-1", label: "Sweatshirts", url: "/category/sweatshirts" },
          { id: "2-1-2", label: "Flannel", url: "/category/flannel" },
          { id: "2-1-3", label: "Round Necks", url: "/category/round-necks" },
        ],
      },
      {
        id: "2-2",
        label: "Pants",
        url: "/category/categorypants",
        sub: [
          { id: "2-2-1", label: "Cargo Pants", url: "/category/cargo-pants" },
          { id: "2-2-2", label: "Jean Flare Pants", url: "/category/jean-flare-pants" },
        ],
      },
      {
        id: "2-3",
        label: "Footwear",
        url: "/category/footwear",
        sub: [
          { id: "2-3-1", label: "Sneakers", url: "/category/sneakers" },
          { id: "2-3-2", label: "Corporate Shoes", url: "/category/corporate-shoes" },
          { id: "2-3-3", label: "Slippers", url: "/slippers" },
        ],
      },
    ],
  },
  {
    id: "3",
    label: "Collections",
    url: "/collections",
  },
  {
    id: "4",
    label: "Contact Us",
    url: "/contact-us",
  },
  {
    id: "5",
    label: "Wishlist",
    url: "/wishlist",
  },
  {
    id: "6",
    label: "Orders",
    url: "/orders",
  },
];

export const navLinks = [
  {
    url: "/dashboard",
    icon: <LayoutDashboard />,
    label: "Dashboard",
  },
  {
    url: "/dashboard/collections",
    icon: <Shapes />,
    label: "Collections",
  },
  {
    url: "/dashboard/products",
    icon: <Tag />,
    label: "Products",
  },
  {
    url: "/dashboard/orders",
    icon: <ShoppingBag />,
    label: "Orders",
  },
  {
    url: "/dashboard/customers",
    icon: <UserRound />,
    label: "Customers",
  },
];