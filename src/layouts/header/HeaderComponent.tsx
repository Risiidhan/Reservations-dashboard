import React from "react";
import RightPanelComponent from "./right-panel/RightPanelComponent";
import CollapseSideMenu from "../sidemenu/CollapseSideMenu";
import SvgIcon from "@/components/SvgIcon";

const HeaderComponent: React.FC = () => {
  return (
    <div className="header-height sticky top-0 flex-center bg-white border-b border-[#A6B4DA]">
      <div className="sidebar-width relative h-full flex-center-tablet border-r border-[#A6B4DA] px-4">
        <SvgIcon name={"hotelLogo"} width={151} height={46} />
        <CollapseSideMenu />
      </div>
      <div className="flex-center-tablet-hidden h-full px-[25px] border-r border-[#A6B4DA]">
        <SvgIcon name={"hotelLogoWithText"} width={41} height={31} />
      </div>
      <div className="flex w-full flex-1 justify-between items-center main-content-padding">
        <div>User Company Logo</div>
        <div>
          <RightPanelComponent />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
