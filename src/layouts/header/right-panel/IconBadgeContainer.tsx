import { BadgeType } from "../../../types/enum/BadgeType";
import React from "react";
import SvgIcon from "@/components/SvgIcon";

const badge = {
  // [BadgeType.Alert]: <AlertSvg/>,
  [BadgeType.Alert]: <SvgIcon name={"alert"} width={21} height={21} />,
  [BadgeType.Notification]: (
    <SvgIcon name={"notification"} width={21} height={21} />
  ),
};

type IconBadgeProps = {
  badgeType: BadgeType;
};
const IconBadgeContainer: React.FC<IconBadgeProps> = ({ badgeType }) => {
  return (
    <div className="right-panel-container-btn relative hover-effect onclick-effect">
      <div className="red-dot"></div>
      {badge[badgeType]}
    </div>
  );
};

export default IconBadgeContainer;
