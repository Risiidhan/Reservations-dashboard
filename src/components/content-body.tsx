import { ContentBodyType } from "@/types/ui";
import { cn } from "@/utils";
import { FC } from "react";

export const ContentBody: FC<ContentBodyType> = ({
  title,
  subtitle,
  className,
  children,
}) => {
  return (
    <section
      className={cn("mx-auto flex max-w-7xl flex-col gap-[20px]", className)}>
      <header>
        <h1 className="mb-3 text-[37.37px] leading-11 font-semibold text-black sm:mb-0">
          {title}
        </h1>
        <h2 className="text-[15.37px] font-normal text-[#6A7392] sm:leading-11">
          {subtitle}
        </h2>
      </header>
      {children}
    </section>
  );
};
