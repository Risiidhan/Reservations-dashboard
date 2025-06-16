import { FC, ComponentProps } from "react";
import { StatsCardContainer } from "./_stats/stats-card-container";
import { ChartsContainer } from "./_charts/charts";

export const DashboardOverview: FC<ComponentProps<"div">> = ({}) => {
  return (
    <>
      <StatsCardContainer />
      <ChartsContainer />
    </>
  );
};
