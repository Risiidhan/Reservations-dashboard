import { FC, ComponentProps } from "react";
import { StatsCardContainer } from "./_stats/stats-card-container";
import { ContentBody } from "@/components/content-body";
import { ChartsContainer } from "./_charts/charts-container";

export const DashboardOverview: FC<ComponentProps<"div">> = ({}) => {
  return (
    <ContentBody
      title={"Here’s what happening"}
      subtitle={
        "Good morning, Marice! Here's a delightful insight of your Dashboard today."
      }
      className={""}>
      <StatsCardContainer />
      <ChartsContainer />
    </ContentBody>
  );
};
