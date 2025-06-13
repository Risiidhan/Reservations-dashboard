import { FC, ReactNode } from "react";

export type AppSidebarGroup = {
  id: string;
  title: string;
  isRoot?: boolean;
  items: AppSidebarGroupItem[];
};

export type AppSidebarGroupItem = {
  id: string;
  title: string;
  rootUrl: string;
  icon: FC;
  sub?: { id: string; title: string; url: string }[];
};

export type StatCard = {
  heading: string;
  value: string;
  icon: ReactNode;
  footerTitle: string;
  footerIcon: ReactNode;
  bottomBorder: string;
  iconColor: string;
};

export type ContentBody = {
  title: string;
  subtitle: string;
  className: string;
  children: ReactNode;
};
