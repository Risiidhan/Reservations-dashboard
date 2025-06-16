import { FC } from "react";

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

export type CustomNumberInput = {
  min: number;
  max: number;
  inputClassName?: string;
  disabled?: boolean;
  className?: string;
};
