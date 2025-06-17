import { CalenderIcon } from "@/assets/icons/calender-icon";
import { OrderIcon } from "@/assets/icons/order-icon";
import { PendingRequestIcon } from "@/assets/icons/pending-request-icon";
import { SalesIcon } from "@/assets/icons/sales-icon";
import { FC, ComponentProps } from "react";
import { StatUpArrowIcon } from "@/assets/icons/stat-up-arrow-icon";
import { StatProps } from "@/types/ui";
import { StatCard } from "./stat-card";
import { StatDownArrowIcon } from "@/assets/icons/stat-down-arrow-icon";

const cards: StatProps[] = [
  {
    header: {
      title: "Total Reservations",
      value: "1,284",
      icon: <CalenderIcon />,
    },
    footer: {
      title: "From last month",
      badge: {
        icon: <StatUpArrowIcon />,
        iconVarient: "success",
        value: "16.2%",
      },
    },
    styles: {
      border: "#FFDEDC",
      iconColor: "#EEC141",
    },
  },
  {
    header: {
      title: "Revenue Sales",
      value: "$43,721",
      icon: <SalesIcon />,
    },
    footer: {
      title: "From last month",
      badge: {
        icon: <StatDownArrowIcon />,
        iconVarient: "destructive",
        value: "16.2%",
      },
    },
    styles: {
      border: "#E2DCFD",
      iconColor: "#6944E2",
    },
  },
  {
    header: {
      title: "Active Orders",
      value: "246",
      icon: <OrderIcon />,
    },
    footer: {
      title: "From yesterday",
      badge: {
        icon: <StatUpArrowIcon />,
        iconVarient: "success",
        value: "16.2%",
      },
    },
    styles: {
      border: "#896DDE",
      iconColor: "#3D85F7",
    },
  },
  {
    header: {
      title: "Pending Requests",
      value: "45",
      icon: <PendingRequestIcon />,
    },
    footer: {
      title: "From yesterday",
      badge: {
        icon: <StatUpArrowIcon />,
        iconVarient: "success",
        value: "16.2%",
      },
    },
    styles: {
      border: "#FFD4F8",
      iconColor: "#E5405D",
    },
  },
];

export const StatCards: FC<ComponentProps<"div">> = ({ ...rest }) => {
  return (
    <div className="@container" {...rest}>
      <div className="grid grid-cols-1 gap-4 @md:grid-cols-2 @4xl:grid-cols-4">
        {cards.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
