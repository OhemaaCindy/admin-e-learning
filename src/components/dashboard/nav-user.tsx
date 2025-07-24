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
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/services/auth-services";
import { uselogoutAdmin } from "@/hooks/register-admin.hook";
import toast from "react-hot-toast";

export function NavUser() {
  const { isMobile } = useSidebar();

  const user = {
    name: "Cindy Essuman",
    email: "m@example.com",
    avatar:
      "https://images.unsplash.com/photo-1713207453356-263654a8e557?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  function fallbackName(username: string | undefined): string {
    if (!username) return "";
    return `${user?.name.split("")[0]}${user?.name
      .split(" ")[1]
      .substring(0, 1)}`;
  }

  // const { mutate } = useMutation({
  //   mutationFn: logout,
  //   onSuccess: () => {
  //     console.log("Logged out successfully");

  //   },
  //   onError: (error) => {
  //     console.error("Logout failed:", error);
  //   },
  // });

  // const handleLogout = () => {
  //   mutate();
  // };

  //  const { mutate } = uselogoutAdmin(
  //   {onSuccess: () => {
  //     console.log("Logged out successfully");

  //   },
  //   onError: (error) => {
  //     console.error("Logout failed:", error);
  //   },
  //  })}
  //  );

  //  const handleLogout = () => {
  //   mutate(
  //       {onSuccess: () => {
  //     console.log("Logged out successfully");

  //   },
  //   onError: (error) => {
  //     console.error("Logout failed:", error);
  //   },
  //  })}
  //   });
  // };
  // const onSubmit = async () => {
  //   mutate( {
  //     onSuccess() {
  //     console.log("logout successfully")
  //       reset();
  //       toast.success("Logout successfully");

  //       // navigate("/otp-verification");
  //     },
  //     onError() {
  //       toast.error("Failed to create account");
  //     },
  //   });
  // };

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
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">
                  {fallbackName(user.name)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className=" truncate text-xs">{user.email}</span>
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
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">
                    {fallbackName(user.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="text-muted-foreground truncate text-xs">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconUserCircle />
                Prfile
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="bg-amber-600">
              <IconLogout />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
