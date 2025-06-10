import React from "react";
import AnalyticCardComponent from "./AnalyticCardComponent";
import { AnalyticCardComponentType } from "@/types/AnalyticCardTypes";
import SvgIcon from "@/components/SvgIcon";
import PillComponent from "./PillComponent";

const AnalyticCardArray: AnalyticCardComponentType[] = [
  {
    heading: "Total Reservations",
    value: "1,284",
    icon: <SvgIcon name="calender" width={"40px"} height={"40px"} />,
    footerTitle: "From last month",
    footerIcon: <PillComponent type="grows" value={"16.2%"} />,
    bottomBorder: "#FFDEDC",
  },
  {
    heading: "Revenue Sales",
    value: "$43,721",
    icon: <SvgIcon name="calender" width={"40px"} height={"40px"} />,
    footerTitle: "From last month",
    footerIcon: <PillComponent type="falls" value={"16.2%"} />,
    bottomBorder: "#E2DCFD",
  },
  {
    heading: "Active Orders",
    value: "246",
    icon: <SvgIcon name="activeOrdersIcon" width={"40px"} height={"40px"} />,
    footerTitle: "From yesterday",
    footerIcon: <PillComponent type="grows" value={"16.2%"} />,
    bottomBorder: "#896DDE",
  },
  {
    heading: "Pending Requests",
    value: "45",
    icon: <SvgIcon name="pendingRequestIcon" width={"40px"} height={"40px"} />,
    footerTitle: "From yesterday",
    footerIcon: <PillComponent type="falls" value={"16.2%"} />,
    bottomBorder: "#FFD4F8",
  },
];
const QuickAnalyticsContainer = () => {
  return (
      <div className="@container">
        <div className="grid grid-cols-1 @md:grid-cols-2 @4xl:grid-cols-4 gap-4">
        {AnalyticCardArray.map((item, index) => (
          <AnalyticCardComponent key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default QuickAnalyticsContainer;
