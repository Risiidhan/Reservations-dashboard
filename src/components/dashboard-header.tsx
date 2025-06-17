import { cn } from "@/utils";
import { ComponentProps, FC } from "react";

export const DashboardHeader: FC<ComponentProps<"header">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <header className={cn("flex flex-col gap-3 sm:gap-0", className)} {...rest}>
      {children}
    </header>
  );
};

export const DashboardHeaderTitle: FC<ComponentProps<"h1">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h1
      className={cn("text-4xl leading-11 font-semibold text-black", className)}
      {...rest}>
      {children}
    </h1>
  );
};

export const DashboardHeaderSubtitle: FC<ComponentProps<"h2">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h2
      className={cn(
        "text-md font-normal text-[#6A7392] sm:leading-11",
        className,
      )}
      {...rest}>
      {children}
    </h2>
  );
};
