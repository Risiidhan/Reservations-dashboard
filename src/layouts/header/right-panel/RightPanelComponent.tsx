import React from "react";
import ProfileComponent from "./ProfileComponent";
import IconBadgeContainer from "./IconBadgeContainer";
import { BadgeType } from "../../../types/enum/BadgeType";
import MobileSideMenuComponent from "@/layouts/sidemenu/MobileSideMenuComponent";

const RightPanelComponent: React.FC = () => {
  return (
    <div className="flex gap-[10px]">
      <IconBadgeContainer badgeType={BadgeType.Notification} />
      <IconBadgeContainer badgeType={BadgeType.Alert} />
      <div className="hidden tablet:flex">
        <ProfileComponent />
      </div>
      <div className="flex tablet:hidden">
        <MobileSideMenuComponent />
      </div>
    </div>
  );
};

export default RightPanelComponent;
