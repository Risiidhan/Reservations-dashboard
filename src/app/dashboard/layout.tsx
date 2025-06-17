import { FC, PropsWithChildren } from "react";
import AppNavbar from "./_layout/app-navbar";
import AppSidebar from "./_layout/app-sidebar";
import ClientProviders from "./_providers/client-providers";

const LayoutPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ClientProviders>
      <AppSidebar />

      <div className="w-full">
        <AppNavbar />

        <div className="min-h-[calc(100svh_-_4rem)] bg-sidebar-content p-4 sm:p-12">
          {children}
        </div>
      </div>
    </ClientProviders>
  );
};

export default LayoutPage;
