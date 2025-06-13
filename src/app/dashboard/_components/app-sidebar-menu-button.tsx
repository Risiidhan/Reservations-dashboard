"use client";

import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";

interface Props extends PropsWithChildren {
  href?: string;
  collapsible?: boolean;
  isRoot?: boolean;
}

const AppSidebarMenuButton: FC<Props> = ({
  children,
  collapsible = false,
  href,
  isRoot = false,
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();
  const isActive = isRoot
    ? pathname === href
    : href
      ? pathname.includes(href)
      : false;
  const [indicatorHeight, setIndicatorHeight] = useState(0);

  console.log(isRoot, pathname, href, isActive);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;
    setIndicatorHeight(button.clientHeight ?? 0);
  }, []);

  return (
    <>
      {collapsible ? (
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            ref={ref}
            size="lg"
            className="relative"
            isActive={isActive}>
            {children}
          </SidebarMenuButton>
        </CollapsibleTrigger>
      ) : (
        <SidebarMenuButton
          ref={ref}
          asChild={Boolean(href)}
          size="lg"
          isActive={isActive}>
          {href ? <Link href={href}>{children}</Link> : children}
        </SidebarMenuButton>
      )}

      {isActive && (
        <motion.div
          layoutId="app-sidebar-indicator"
          className="absolute top-0 -right-3 h-full w-2 bg-sidebar-primary"
          style={{ height: indicatorHeight }}
        />
      )}
    </>
  );
};

export default AppSidebarMenuButton;
