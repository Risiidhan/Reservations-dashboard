"use client";

import { FC, PropsWithChildren } from "react";
import UserProvider from "./user-provider";
import QueryProvider from "./query-provider";
import { SidebarProvider } from "@/components/ui/sidebar";

const ClientProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryProvider>
      <UserProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </UserProvider>
    </QueryProvider>
  );
};

export default ClientProviders;
