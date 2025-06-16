"use client";

import { TimeLine } from "@/types/ui";
import { cn } from "@/utils";
import { FC } from "react";

export const TimeLineTab: FC<TimeLine> = ({
  options,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="grid grid-cols-3 border border-[#CFD2D8]">
      {options?.map((item: string, index: number) => (
        <div
          onClick={() => setActiveTab(index)}
          key={index}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
          className={cn(
            "flex flex-1 cursor-pointer justify-center border-[#CFD2D8] p-[8px] text-center text-[13px] font-[600] transition-all duration-300 hover:bg-[#CFCFF1]",
            index !== 0 && "border-l",
            activeTab === index ? "bg-[#CFCFF1]" : "bg-[#fafcff]",
          )}>
          {item}
        </div>
      ))}
    </div>
  );
};
