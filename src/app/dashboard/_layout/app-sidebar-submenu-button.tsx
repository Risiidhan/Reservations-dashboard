"use client";

import { SidebarMenuSubButton } from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  href?: string;
}

const AppSidebarSubMenuButton: FC<Props> = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <SidebarMenuSubButton asChild={Boolean(href)} isActive={isActive}>
      {href ? <Link href={href}>{children}</Link> : children}
    </SidebarMenuSubButton>
  );
};

export default AppSidebarSubMenuButton;
