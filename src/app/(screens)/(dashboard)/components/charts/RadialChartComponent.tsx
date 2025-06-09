"use client";

import { TrendingUp } from "lucide-react";
import { Customized } from "recharts";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useIsMobile } from "@/hooks/use-mobile";

export const description = "A radial chart with stacked sections";

const chartData = [
  { month: "january", desktop: 1260, mobile: 570, tablet: 450 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#978FED",
  },
  mobile: {
    label: "Mobile",
    color: "#EE89DF",
  },
  tablet: {
    label: "Tablet",
    color: "#FBDE9D",
  },
} satisfies ChartConfig;

export function RadialChartComponent() {
  const totalVisitors =
    chartData[0].desktop + chartData[0].mobile + chartData[0].tablet;

  const isMobile = useIsMobile();

  function DottedArc(props: { width?: number; height?: number }) {
    const { width = 0, height = 0 } = props;
    const cx = width / 2;
    const cy = height * 0.8;
    const radius = isMobile ? 100 : 150;
    const dots = 10;
    const angleStep = 180 / dots;

    const dotElements = [];

    for (let i = 0; i <= dots; i++) {
      const angle = (Math.PI * (180 - i * angleStep)) / 180;
      const x = cx + radius * Math.cos(angle);
      const y = cy - radius * Math.sin(angle);
      dotElements.push(<circle key={i} cx={x} cy={y} r={3} fill="#d3d3d3" />);
    }

    return <g>{dotElements}</g>;
  }

  return (
    <Card className="flex flex-col gap-0 shadow-none border-0 p-0">
      <CardContent className="flex items-center p-0">
        <ChartContainer config={chartConfig} className="mx-auto w-full">
          <RadialBarChart
            cx="50%"
            cy="80%"
            data={chartData}
            endAngle={180}
            innerRadius={isMobile ? 120 : 180}
            outerRadius={isMobile ? 160 : 240}
            barCategoryGap={1}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-[50px] font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        ></tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <Customized component={<DottedArc />} />

            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={15}
              fill="#978FED"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="#EE89DF"
              stackId="a"
              cornerRadius={15}
              forceCornerRadius
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="tablet"
              stackId="a"
              cornerRadius={15}
              fill="#FBDE9D"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-4 text-sm">
        <div className="text-[19px] leading-2 font-[600]">
          Food & Beverage Orders
        </div>
        <div className="text-muted-foreground leading-none text-center">
          Showing total visitors for the last 6 months
        </div>

        <div className="flex-center gap-3 flex-wrap mb-3">
          {(
            Object.entries(chartConfig) as [
              keyof typeof chartConfig,
              (typeof chartConfig)[keyof typeof chartConfig]
            ][]
          ).map(([key, { label, color }]) => (
            <div key={key} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
