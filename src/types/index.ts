import { LucideIcon } from "lucide-react";
import { FC, SVGProps } from "react";
import { AppSidebarGroup } from "./ui";

export type AppConfig = {
  title: string;
  icon: LucideIcon | FC<SVGProps<SVGSVGElement>>;
  sidebar: {
    rootGroup: AppSidebarGroup;
    groups: AppSidebarGroup[];
  };
};
