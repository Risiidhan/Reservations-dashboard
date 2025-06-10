"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import "./style.css";
import SidebarFooterComponent from "./SidebarFooterComponent";
import MenuComponent from "./MenuComponent";

export const SideMenuComponent: React.FC = () => {
  const { open } = useSidebar();

  return (
    <div
      className={`relative transition-all duration-300 ${
        open ? "tablet:sidebar-width" : "w-0"
      }`}
    >
      <Sidebar
        className={`bg-white sidebar-position sidebar-width border-r border-[#A6B4DA]`}
      >
        <SidebarContent className="p-4">
          <nav className="space-y-4 bg-white overflow-y-auto">
            <MenuComponent />
          </nav>
        </SidebarContent>
        <SidebarFooter className="p-2 pb-0">
          <SidebarFooterComponent />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};
