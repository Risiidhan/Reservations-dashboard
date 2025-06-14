import { FC, ComponentProps } from "react";
import { ChartCard } from "./chart-card";
import { ChartType } from "@/constants/enums";
import { ChartsCard } from "@/types/ui";

const chartsArr: ChartsCard[] = [
  {
    title: "Reservation Overview",
    value: 9845,
    subtitle: "Past 30 days",
    chart: ChartType.Bar,
  },
  {
    title: "Order Analytics",
    value: 2145,
    subtitle: "Past 30 days",
    chart: ChartType.Area,
  },
  {
    title: "Request Type",
    value: 4845,
    subtitle: "Past 30 days",
    chart: ChartType.Radial,
  },
  {
    title: "Guest Engagement Rate",
    value: 7845,
    subtitle: "Past 30 days",
    chart: ChartType.Line,
  },
];

export const ChartsContainer: FC<ComponentProps<"div">> = ({}) => {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-4 @3xl:grid-cols-2">
        {chartsArr.map((chart: ChartsCard, index: number) => (
          <ChartCard key={index} {...chart} />
        ))}
      </div>
    </div>
  );
};
