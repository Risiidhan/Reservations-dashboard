import { badgeVariants } from "@/components/ui/badge";
import { ChartType } from "@/constants/enums";
import { VariantProps } from "class-variance-authority";
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

export type StatProps = {
  header: {
    title: string;
    value: string;
    icon: ReactNode;
  };
  footer: {
    title: string;
    badge: {
      icon: ReactNode;
      value: string;
      iconVarient: VariantProps<typeof badgeVariants>["variant"];
    };
  };
  styles: {
    border: string;
    iconColor: string;
  };
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
  tabs: string[];
  activeTab: number;
  setActiveTab: (index: number) => void;
};
