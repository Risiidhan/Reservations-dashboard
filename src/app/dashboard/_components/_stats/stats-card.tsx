import {
  Card,
  CardAction,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatCard } from "@/types/ui";
import { FC } from "react";

export const StatsCard: FC<StatCard> = ({
  heading,
  value,
  icon,
  footerIcon,
  footerTitle,
  bottomBorder,
  iconColor,
}) => {
  return (
    <Card
      style={{ borderBottom: `4px solid ${bottomBorder}` }}
      className="rounded-b-none border-[#CFD2D8] shadow-none">
      <CardHeader>
        <CardTitle className="text-[15px] font-[400]">{heading}</CardTitle>
        <CardDescription className="text-[35px] leading-10 font-semibold text-black xl:text-[42px]">
          {value}
        </CardDescription>
        <CardAction>
          <div
            style={{ color: iconColor, border: `1px solid ${iconColor}` }}
            className="flex aspect-square h-auto w-[39px] items-center justify-center rounded-[4px]">
            {icon}
          </div>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <div className="text-[13.26px] font-[400]">{footerTitle}</div>
        <div>{footerIcon}</div>
      </CardFooter>
    </Card>
  );
};
