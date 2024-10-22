import { LayoutDashboard, Shapes, ShoppingBag, Tag, UserRound } from "lucide-react";

export const mainMenu = [
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
        label: "Shirts",
        url: "/category/categoryshirts",
        sub: [
          { label: "Sweatshirts", url: "/category/sweatshirts" },
          { label: "Flannel", url: "/category/flannel" },
          { label: "Round Necks", url: "/category/round-necks" },
        ],
      },
      {
        label: "Pants",
        url: "/category/categorypants",
        sub: [
          { label: "Cargo Pants", url: "/category/cargo-pants" },
          { label: "Jean Flare Pants", url: "/category/jean-flare-pants" },
        ],
      },
      {
        label: "Footwear",
        url: "/category/footwear",
        sub: [
          { label: "Sneakers", url: "/category/sneakers" },
          { label: "Corporate Shoes", url: "/category/corporate-shoes" },
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