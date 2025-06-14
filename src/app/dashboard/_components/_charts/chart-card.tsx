import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ChartsCard } from "@/types/ui";
import { cn } from "@/utils";
import { FC } from "react";
import BarChartComponent from "./bar-chart";
import { RadialChartComponent } from "./radial-chart";
import { AreaChartComponent } from "./area-chart";
import { LineChartComponent } from "./line-chart";

const chartMap = {
  bar: <BarChartComponent />,
  radial: <RadialChartComponent />,
  area: <AreaChartComponent />,
  line: <LineChartComponent />,
};

const TimeLineComponent: React.FC = () => {
  return (
    <div className="grid grid-cols-3 border border-[#CFD2D8]">
      <div className="timeline bg-[#CFCFF1]">Days</div>
      <div className="timeline border-x border-[#CFD2D8] bg-[#fafcff]">
        Month
      </div>
      <div className="timeline bg-[#fafcff]">Year</div>
    </div>
  );
};

export const ChartCard: FC<ChartsCard> = ({
  title,
  value,
  subtitle,
  chart,
  className,
}) => {
  return (
    <Card
      className={cn(
        "rounded-[24px] border border-[#CFD2D8] bg-white",
        className,
      )}>
      <CardHeader className="px-[24px] py-[18px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <CardTitle className="tablet:leading-[12px] text-[17px] leading-[18px] font-[600]">
              {title}
            </CardTitle>
            <CardDescription className="text-[26px] leading-[32px] font-[700]">
              {value}{" "}
              <span className="tablet:inline-block block text-[14px] font-[400] text-[#9291A5]">
                {subtitle}
              </span>
            </CardDescription>
          </div>
          <div>
            {/* You can replace this with your component */}
            <TimeLineComponent />
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex items-center px-[24px] py-[18px]">
        <div className="flex-1">{chartMap[chart]}</div>
      </CardContent>
    </Card>
  );
};
