import { ChartType } from "@/constants/enums";
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

export type ContentBodyType = {
  title: string;
  subtitle: string;
  className: string;
  children: ReactNode;
};

export type ChartsCard = {
  title: string;
  value: number;
  subtitle: string;
  chart: ChartType;
  className?: string;
};

export type TimeLine = {
  options: string[];
  activeTab: number;
  setActiveTab: (index: number) => void;
};
