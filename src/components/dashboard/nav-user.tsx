"use client";

import {
  IconCreditCard,
  IconDotsVertical,
  IconLogout,
  IconNotification,
  IconUserCircle,
} from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { uselogoutAdmin } from "@/hooks/register-admin.hook";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { checkAuthUser } from "@/services/auth-services";
import type { CheckAuthResponse } from "@/types/types";
import { Info } from "lucide-react";

export function NavUser() {
  const { isMobile } = useSidebar();
  const navigate = useNavigate();

  // const user = {
  //   name: "Cindy Essuman",
  //   email: "m@example.com",
  //   avatar:
  //     "https://images.unsplash.com/photo-1713207453356-263654a8e557?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // };

  const { mutate } = uselogoutAdmin();

  const handleLogout = () => {
    mutate(), Cookies.remove("token");
    navigate("/");
  };

  const { data: userInfo } = useQuery<CheckAuthResponse, Error>({
    queryKey: ["get-info"],
    queryFn: checkAuthUser,
  });
  const info = userInfo?.user;

  function fallbackName(info: string | undefine): string {
    if (!info?.firstName || info?.lastName) return "";
    return `${info?.firstName.split("")[0]}${info?.lastName
      .split(" ")[1]
      .substring(0, 1)}`;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="text-sidebar-primary-foreground data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-foreground"
            >
              <Avatar className="size-11">
                <AvatarImage src="" alt="user name" />
                <AvatarFallback className="rounded-lg">
                  {fallbackName(`${info?.firstName} ${info?.lastName}`)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{`${info?.firstName} ${info?.lastName}`}</span>
                <span className=" truncate text-xs">{info?.email}</span>
              </div>
              <IconDotsVertical className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal"></DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconUserCircle />
                Profile
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="bg-amber-400">
              <IconLogout />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
