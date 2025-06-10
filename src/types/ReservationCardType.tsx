import { ReactNode } from "react";

export type ReservationCardType = {
    icon: string;
    title: string;
    value: number;
    indicator: string | ReactNode;
    iconBg: string;
    indicatorType: "down" | "up" | "text";
}