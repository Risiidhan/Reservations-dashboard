import React from "react";
import ChartComponent from "./ChartComponent";
import { chartType } from "@/types/ChartTypes";

const DashboardChartContainerComponent = () => {
  const chartsArr: chartType[] = [
    {
      title: "Reservation Overview",
      value: 9845,
      subtitle: "Past 30 days",
      type: "barChart",
    },
    {
      title: "Order Analytics",
      value: 2145,
      subtitle: "Past 30 days",
      type: "areaChart",
    },
    {
      title: "Request Type",
      value: 4845,
      subtitle: "Past 30 days",
      type: "radialChart",
    },
    {
      title: "Guest Engagement Rate",
      value: 7845,
      subtitle: "Past 30 days",
      type: "lineChart",
    },
  ];
  return (
    <div className="@container">
      <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-4">
        {chartsArr.map((chart: chartType, index: number) => (
          <ChartComponent key={index} {...chart} />
        ))}
      </div>
    </div>
  );
};

export default DashboardChartContainerComponent;
