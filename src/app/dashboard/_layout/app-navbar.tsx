import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/utils";
import { FC } from "react";

export const AppNavbar: FC = () => {
  return (
    <div className={cn("sticky top-0 z-10 h-16 border-b bg-sidebar p-4")}>
      <SidebarTrigger className="border sm:hidden" />
    </div>
  );
};

export default AppNavbar;
