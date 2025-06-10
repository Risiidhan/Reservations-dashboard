import React from "react";
import CardComponent from "./CardComponent";
import { ReservationCardType } from "@/types/ReservationCardType";

const cardsArr: ReservationCardType[] = [
  {
      icon: "reservation",
      title: "Total Reservation",
      value: 124,
      indicator: "12%",
      iconBg: "#FFEDD5",
      indicatorType: "up"
  },
  {
      icon: "confirmed",
      title: "Today's Confirmed",
      value: 18,
      indicator: "12%",
      iconBg: "#D1FAE5",
      indicatorType: "down"
  },
  {
      icon: "pending",
      title: "Pending Confirmation",
      value: 7,
      indicator: "3%",
      iconBg: "#FEF3C7",
      indicatorType: "down"
  },
  {
      icon: "tables",
      title: "Available Tables",
      value: 7,
      indicator: "of 20",
      iconBg: "#DBEAFE",
      indicatorType: "text"
  },
];
const CardContainerComponent = () => {
  return (
    <div className="@container">
      <div className="grid grid-cols-2 @4xl:grid-cols-4 gap-4">
        {cardsArr.map((card: ReservationCardType, index: number) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardContainerComponent;
