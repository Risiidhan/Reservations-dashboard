import {
  DashboardHeader,
  DashboardHeaderSubtitle,
  DashboardHeaderTitle,
} from "@/components/dashboard-header";
import { ChartsContainer } from "./_components/_charts/charts";
import { StatCards } from "./_components/_stats/stat-cards";

const Page = () => {
  return (
    <>
      <DashboardHeader>
        <DashboardHeaderTitle>Here’s what happening</DashboardHeaderTitle>
        <DashboardHeaderSubtitle>
          Good morning, Marice! Here&apos;s a delightful insight of your
          Dashboard today.
        </DashboardHeaderSubtitle>
      </DashboardHeader>
      <StatCards />
      <ChartsContainer />
    </>
  );
};

export default Page;
