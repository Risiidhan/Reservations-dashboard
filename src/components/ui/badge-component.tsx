import { FC } from "react";
import { Badge } from "./badge";
import { BadgeType } from "@/types/ui";
import { cn } from "@/utils";

export const BadgeComponent: FC<BadgeType> = ({
  varient,
  title,
  icon,
  className,
}) => {
  return (
    <Badge variant={varient} className={cn("", className)}>
      {icon && icon}
      {title}
    </Badge>
  );
};
