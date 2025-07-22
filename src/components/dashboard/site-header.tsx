// import { Separator } from "@/components/ui/separator";
// import { SidebarTrigger } from "@/components/ui/sidebar";
import AppHeader from "../app-header";

export function SiteHeader() {
  return (
    <header className="py-4 flex shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        {/* <SidebarTrigger className="-ml-1" /> */}
        {/* <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" /> */}
        <AppHeader
          title="Welcome Admin 👋"
          description="Track activity, trends, and popular destinations in real time

"
        />
        <div className="ml-auto flex items-center gap-2"></div>
      </div>
    </header>
  );
}
