import { FC, ComponentProps } from "react";
import { StatsCardContainer } from "./_stats/stats-card-container";
import { ContentBodyComponent } from "@/components/content-body-component";

export const DashboardOverview: FC<ComponentProps<"div">> = ({}) => {
  return (
    <ContentBodyComponent
      title={"Here’s what happening"}
      subtitle={
        "Good morning, Marice! Here's a delightful insight of your Dashboard today."
      }
      className={""}>
      <StatsCardContainer />
    </ContentBodyComponent>
  );
};
