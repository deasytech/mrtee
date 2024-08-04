import { LayoutDashboard, ShoppingBag, Tag, UserRound, Utensils } from "lucide-react";

export const mainMenu = [
  {
    id: "1",
    label: "Home",
    url: "/",
  },
  {
    id: "2",
    label: "Luxury Store",
    url: "/luxury-store",
    sub: [
      {
        label: "Shirts",
        url: "shirts",
        sub: [
          { label: "Sweatshirts", url: "/sweatshirts" },
          { label: "Flannel", url: "/flannel" },
          { label: "Round Necks", url: "/round-necks" },
        ],
      },
      {
        label: "Pants",
        url: "pants",
        sub: [
          { label: "Cargo Pants", url: "/cargo-pants" },
          { label: "Jean Flare Pants", url: "/jean-flare-pants" },
        ],
      },
      {
        label: "Footwear",
        url: "/footwear",
        sub: [
          { label: "Sneakers", url: "/cargo-pants" },
          { label: "Corporate Shoes", url: "/corporate-shoes" },
        ],
      },
    ],
  },
  {
    id: "3",
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
    url: "/dashboard/menus",
    icon: <Tag />,
    label: "Menus",
  },
  {
    url: "/dashboard/dishes",
    icon: <Utensils />,
    label: "Dishes",
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