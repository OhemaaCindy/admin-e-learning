"use client";

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";

interface NavMainProps {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}

export function NavMain({ items }: NavMainProps) {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (url: string): boolean => {
    return (
      (pathname === "/" && url === "/") ||
      pathname === url ||
      pathname.startsWith(`${url}/`)
    );
  };

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2 ">
        <SidebarMenu className="flex flex-col gap-6">
          {items.map((item) => (
            <SidebarMenuItem
              key={item.title}
              // className="bg-amber-700 p-3 rounded-sm"
            >
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                className={cn(
                  isActive(item.url) &&
                    "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear "
                )}
              >
                <Link to={item.url} className="flex items-center gap-2">
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
