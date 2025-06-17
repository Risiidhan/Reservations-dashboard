import { cn } from "@/utils";
import { ComponentProps, FC } from "react";

export const DashboardHeader: FC<ComponentProps<"header">> = ({
  children,
  className,
}) => {
  return (
    <header className={cn("flex flex-col gap-3 sm:gap-0", className)}>
      {children}
    </header>
  );
};

export const DashboardHeaderTitle: FC<ComponentProps<"h1">> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={cn("text-4xl leading-11 font-semibold text-black", className)}>
      {children}
    </h1>
  );
};

export const DashboardHeaderSubtitle: FC<ComponentProps<"h2">> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={cn(
        "text-md font-normal text-[#6A7392] sm:leading-11",
        className,
      )}>
      {children}
    </h2>
  );
};
