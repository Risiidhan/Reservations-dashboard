"use client";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function BarChartComponent() {
  return (
    <Card className="shadow-none border-none">
      <CardContent className="px-0">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <defs>
              <linearGradient id="desktopGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8061DB61" /> {/* Light purple */}
                <stop offset="100%" stopColor="#8061DBF0" /> {/* Dark purple */}
              </linearGradient>

              {/* Striped Pattern for Mobile */}
              <pattern
                id="mobileStripes"
                patternUnits="userSpaceOnUse"
                width="4"
                height="6"
              >
                <line
                  x1="0"
                  y="0"
                  x2="0"
                  y2="6"
                  stroke="#c084fc" // Light purple
                  strokeWidth="1"
                />
              </pattern>
            </defs>

            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              width={40}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            {/* <ChartLegend content={<ChartLegendContent />} /> */}
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="url(#desktopGradient)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="url(#mobileStripes)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default BarChartComponent;
