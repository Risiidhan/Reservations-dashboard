// /src/components/dashboard-header.tsx
import { cn } from "@/utils";
import { ReactNode } from "react";

export function Header({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("flex flex-col gap-[12px] sm:gap-0", className)}>
      {children}
    </header>
  );
}

export function HeaderTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "text-[37.37px] leading-11 font-semibold text-black",
        className,
      )}>
      {children}
    </h1>
  );
}

export function HeaderSubtitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-[15.37px] font-normal text-[#6A7392] sm:leading-11",
        className,
      )}>
      {children}
    </h2>
  );
}
