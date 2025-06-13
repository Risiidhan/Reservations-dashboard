import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarLogo,
  SidebarLogoLabel,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { appConfig } from "@/constants";
import { FC } from "react";
import AppSidebarGroup from "./app-sidebar-group";

const AppSidebar: FC = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="relative">
        <SidebarLogo>
          <appConfig.icon size={30} />
          <SidebarLogoLabel>{appConfig.title}</SidebarLogoLabel>
        </SidebarLogo>

        <SidebarTrigger className="absolute top-1/2 -right-10 z-10 hidden h-8 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-sm border bg-white sm:inline-flex" />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <AppSidebarGroup group={appConfig.sidebar.rootGroup} />

        <SidebarSeparator />

        {appConfig.sidebar.groups.map((group) => (
          <AppSidebarGroup key={group.id} group={group} />
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
