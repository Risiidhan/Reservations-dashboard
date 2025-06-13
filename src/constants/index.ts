import DashboardIcon from "@/assets/icons/dashboard-icon";
import ReservationsIcon from "@/assets/icons/reservations-icon";
import { AppConfig } from "@/types";
import { BoxIcon } from "lucide-react";

export const appConfig: AppConfig = {
  title: "ReservZ",
  icon: BoxIcon,
  sidebar: {
    rootGroup: {
      id: "root",
      title: "Overview",
      isRoot: true,
      items: [
        {
          id: "dashboard",
          rootUrl: "/dashboard",
          icon: DashboardIcon,
          title: "Dashboard",
        },
      ],
    },
    groups: [
      {
        id: "booking",
        title: "Booking & Scheduling",
        items: [
          {
            id: "reservations",
            title: "Reservations",
            icon: ReservationsIcon,
            rootUrl: "/dashboard/reservations",
            sub: [
              {
                id: "view-reservations",
                title: "View Reservations",
                url: "/dashboard/reservations",
              },
              {
                id: "add-reservations",
                title: "Add Reservation",
                url: "/dashboard/reservations/add",
              },
            ],
          },
        ],
      },
    ],
  },
};
