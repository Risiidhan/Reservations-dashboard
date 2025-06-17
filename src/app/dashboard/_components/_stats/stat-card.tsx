import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatProps } from "@/types/ui";
import { FC } from "react";

export const FooterBadge: FC<StatProps["footer"]["badge"]> = ({
  icon,
  iconVarient,
  value,
}) => {
  return (
    <Badge variant={iconVarient} className="rounded-lg px-2 py-0.5 font-bold">
      {icon}
      {value}
    </Badge>
  );
};

export const StatCard: FC<StatProps> = ({ header, footer, styles }) => {
  return (
    <Card
      style={{ borderBottom: `4px solid ${styles?.border}` }}
      className="@container rounded-b-none border-[#CFD2D8] shadow-none">
      <CardHeader className="flex-1">
        <CardTitle className="text-md font-normal">{header?.title}</CardTitle>
        <CardDescription className="text-3xl leading-10 font-semibold text-black 2xl:text-4xl">
          {header?.value}
        </CardDescription>
        <CardAction>
          <div
            style={{
              color: styles?.iconColor,
              border: `1px solid ${styles?.iconColor}`,
            }}
            className="flex aspect-square h-auto w-10 items-center justify-center rounded-sm">
            {header?.icon}
          </div>
        </CardAction>
      </CardHeader>
      <CardFooter className="justify-between">
        <div className="text-sm font-normal">{footer?.title}</div>
        <div>
          <FooterBadge
            icon={footer?.badge?.icon}
            value={footer?.badge?.value}
            iconVarient={footer?.badge?.iconVarient}
          />
        </div>
      </CardFooter>
    </Card>
  );
};
