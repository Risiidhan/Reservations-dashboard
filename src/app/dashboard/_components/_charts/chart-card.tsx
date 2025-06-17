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
        "rounded-3xl border border-[#CFD2D8] bg-white shadow-none",
        className,
      )}>
      <CardHeader className="px-6 py-4">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-lg leading-4 font-semibold md:leading-3">
              {title}
            </CardTitle>
            <CardDescription className="flex items-baseline gap-2 text-2xl leading-8 font-bold text-black">
              {value}
              <span className="block text-sm leading-0 font-normal text-[#9291A5] md:inline-block">
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

      <CardContent className="flex h-full items-center px-6 py-4">
        <div className="flex-1 items-center">{chartMap[chart]}</div>
      </CardContent>
    </Card>
  );
};
