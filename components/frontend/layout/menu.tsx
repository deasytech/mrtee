"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const mainMenu = [
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
]

export function MainMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {mainMenu.map((item) => (
          <NavigationMenuItem key={item.id}>
            {item.sub ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {item.sub.map((subItem) => (
                      <li key={subItem.label}>
                        <NavigationMenuLink asChild>
                          <Link href={subItem.url} className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}>
                            <div className="text-sm font-medium leading-none">
                              {subItem.label}
                            </div>
                            {subItem.sub && (
                              <ul className="pl-4">
                                {subItem.sub.map((nestedItem) => (
                                  <li key={nestedItem.url}>
                                    <NavigationMenuLink asChild>
                                      <Link href={nestedItem.url} className={cn(
                                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                      )}>
                                        {nestedItem.label}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.url} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.label}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
