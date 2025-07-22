"use client";

import * as React from "react";
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconInnerShadowTop,
  IconListDetails,
  IconUsers,
} from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./navbar-main";
import { NavUser } from "./nav-user";
import { Link } from "react-router";

const navMain = [
  {
    title: "Dashboard",
    url: "/overview",
    icon: IconDashboard,
  },
  {
    title: "Invoices",
    url: "/invoices",
    icon: IconListDetails,
  },
  {
    title: "Learners",
    url: "/learners",
    icon: IconListDetails,
  },
  {
    title: "Tracks",
    url: "/tracks",
    icon: IconChartBar,
  },
  {
    title: "Courses",
    url: "/courses",
    icon: IconFolder,
  },
  {
    title: "Report",
    url: "/report",
    icon: IconUsers,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size={"lg"}
              className="data-[slot=sidebar-menu-button]:!p-1.5 bg-white h-20 "
            >
              {/* <Link to="#"> */}
              <span className="flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="w-auto h-8 object-cover"
                />
              </span>
              {/* </Link> */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-sidebar-primary">
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
