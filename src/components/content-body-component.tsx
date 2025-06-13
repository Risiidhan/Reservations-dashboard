import { ContentBody } from "@/types/ui";
import { cn } from "@/utils";
import { FC } from "react";

export const ContentBodyComponent: FC<ContentBody> = ({
  title,
  subtitle,
  className,
  children,
}) => {
  return (
    <section className={cn("flex flex-col gap-[20px]", className)}>
      <header>
        <h1 className="text-[37.37px] leading-11 font-semibold text-black">
          {title}
        </h1>
        <h2 className="text-[15.37px] leading-11 font-normal text-[#6A7392]">
          {subtitle}
        </h2>
      </header>
      {children}
    </section>
  );
};
