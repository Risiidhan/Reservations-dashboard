import { SidebarProvider } from "@/components/ui/sidebar";
import { FC, PropsWithChildren } from "react";
import AppNavbar from "./_components/app-navbar";
import AppSidebar from "./_components/app-sidebar";

const LayoutPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="w-full">
        <AppNavbar />

        <div className="min-h-[calc(100svh_-_4rem)] bg-sidebar-content p-4 sm:p-12">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default LayoutPage;
