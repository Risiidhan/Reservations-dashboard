import { CalenderIcon } from "@/assets/icons/calender-icon";
import { OrderIcon } from "@/assets/icons/order-icon";
import { PendingRequestIcon } from "@/assets/icons/pending-request-icon";
import { SalesIcon } from "@/assets/icons/sales-icon";
import { FC, ComponentProps } from "react";
import { StatsCard } from "./stats-card";
import { StatCard } from "@/types/ui";
import { BadgeComponent } from "@/components/ui/badge-component";
import { StatUpArrowIcon } from "@/assets/icons/stat-up-arrow-icon";

const StatsCardArr: StatCard[] = [
  {
    heading: "Total Reservations",
    value: "1,284",
    icon: <CalenderIcon />,
    footerTitle: "From last month",
    footerIcon: (
      <BadgeComponent
        varient={"secondary"}
        title="16.2%"
        className="rounded-[12.5px] bg-green-400 px-[8px] py-[1px] font-bold text-[#24875F]"
        icon={<StatUpArrowIcon />}
      />
    ),
    bottomBorder: "#FFDEDC",
    iconColor: "#EEC141",
  },
  {
    heading: "Revenue Sales",
    value: "$43,721",
    icon: <SalesIcon />,
    footerTitle: "From last month",
    footerIcon: (
      <BadgeComponent
        varient={"secondary"}
        title="16.2%"
        className="rounded-[12.5px] px-[8px] py-[1px] font-bold text-[#24875F]"
        icon={<StatUpArrowIcon />}
      />
    ),
    bottomBorder: "#E2DCFD",
    iconColor: "#6944E2",
  },
  {
    heading: "Active Orders",
    value: "246",
    icon: <OrderIcon />,
    footerTitle: "From yesterday",
    footerIcon: (
      <BadgeComponent
        varient={"destructive"}
        title="16.2%"
        className="rounded-[12.5px] px-[8px] py-[1px] font-bold text-white"
        icon={<StatUpArrowIcon />}
      />
    ),
    bottomBorder: "#896DDE",
    iconColor: "#3D85F7",
  },
  {
    heading: "Pending Requests",
    value: "45",
    icon: <PendingRequestIcon />,
    footerTitle: "From yesterday",
    footerIcon: (
      <BadgeComponent
        varient={"secondary"}
        title="16.2%"
        className="rounded-[12.5px] px-[8px] py-[1px] font-bold text-[#24875F]"
        icon={<StatUpArrowIcon />}
      />
    ),
    bottomBorder: "#FFD4F8",
    iconColor: "#E5405D",
  },
];
export const StatsCardContainer: FC<ComponentProps<"div">> = ({}) => {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-4 @md:grid-cols-2 @4xl:grid-cols-4">
        {StatsCardArr.map((item, index) => (
          <StatsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
