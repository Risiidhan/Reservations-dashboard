import {
  Header,
  HeaderSubtitle,
  HeaderTitle,
} from "@/components/dashboard-header";
import { DashboardOverview } from "./_components/dashboard-overview";

const Page = () => {
  return (
    <>
      <Header>
        <HeaderTitle>Here’s what happening</HeaderTitle>
        <HeaderSubtitle>
          Good morning, Marice! Here&apos;s a delightful insight of your
          Dashboard today.
        </HeaderSubtitle>
      </Header>
      <DashboardOverview />
    </>
  );
};

export default Page;
