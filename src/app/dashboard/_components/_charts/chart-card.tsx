"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ChartsCard } from "@/types/ui";
import { cn } from "@/utils";
import { FC, useState } from "react";
import BarChartComponent from "./bar-chart";
import { RadialChartComponent } from "./radial-chart";
import { AreaChartComponent } from "./area-chart";
import { LineChartComponent } from "./line-chart";
import { TimeLineTab } from "./time-line";

const chartMap = {
  bar: <BarChartComponent />,
  radial: <RadialChartComponent />,
  area: <AreaChartComponent />,
  line: <LineChartComponent />,
};

export const ChartCard: FC<ChartsCard> = ({
  title,
  value,
  subtitle,
  chart,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs: string[] = ["Days", "Month", "Year"];

  return (
    <Card
      className={cn(
        "rounded-[24px] border border-[#CFD2D8] bg-white shadow-none",
        className,
      )}>
      <CardHeader className="px-[24px] py-[18px]">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex flex-col">
            <CardTitle className="tablet:leading-[12px] text-[17px] leading-[18px] font-[600]">
              {title}
            </CardTitle>
            <CardDescription className="flex items-baseline gap-2 text-[26px] leading-[32px] font-[700] text-black">
              {value}
              <span className="tablet:inline-block block text-[14px] leading-0 font-[400] text-[#9291A5]">
                {subtitle}
              </span>
            </CardDescription>
          </div>
          <TimeLineTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </CardHeader>

      <CardContent className="flex h-full items-center px-[24px] py-[18px]">
        <div className="flex-1 items-center">{chartMap[chart]}</div>
      </CardContent>
    </Card>
  );
};
