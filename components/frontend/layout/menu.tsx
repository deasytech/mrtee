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
import { mainMenu } from "@/lib/constants"

export function MainMenu() {
  const [ isMounted, setIsMounted ] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {mainMenu.map((item) => (
          <NavigationMenuItem key={item.id}>
            {item.sub ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr_1fr]">
                    {item.sub.map((subItem) => (
                      <li key={subItem.label}>
                        <Link href={subItem.url} passHref>
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 p-2 leading-none no-underline outline-none transition-colors"
                          )}>
                            <div className="text-sm font-medium leading-none">
                              {subItem.label}
                            </div>
                            {subItem.sub && (
                              <ul className="pl-4">
                                {subItem.sub.map((nestedItem) => (
                                  <li key={nestedItem.url}>
                                    <Link href={nestedItem.url} passHref>
                                      <NavigationMenuLink className={cn(
                                        "block select-none space-y-1 p-2 leading-none no-underline outline-none transition-colors hover:text-gold text-[14px] text-nowrap"
                                      )}>
                                        {nestedItem.label}
                                      </NavigationMenuLink>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.url} passHref>
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
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-2 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
