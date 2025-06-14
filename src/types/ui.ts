import { badgeVariants } from "@/components/ui/badge";
import { ChartType } from "@/constants/enums";
import { VariantProps } from "class-variance-authority";
import { FC, ReactNode } from "react";

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

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

export type BadgeType = {
  varient: BadgeVariant;
  title: string;
  icon?: ReactNode;
  className?: string;
};

export type ChartsCard = {
  title: string;
  value: number;
  subtitle: string;
  chart: ChartType;
  className?: string;
};
