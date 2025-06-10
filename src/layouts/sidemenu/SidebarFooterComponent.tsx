import React from "react";
import Image from "next/image";
import SvgIcon from "@/components/SvgIcon";
import "./style.css";

type FooterItem = {
  title: string;
  icon: React.ReactNode;
  redirectTo: string;
};

const footerData: FooterItem[] = [
  {
    title: "Quickstart",
    icon: <SvgIcon name="quickStartIcon" width={20} height={16} />,
    redirectTo: "/",
  },
  {
    title: "Help",
    icon: <SvgIcon name="helpIcon" width={20} height={16} />,
    redirectTo: "/",
  },
];

const SidebarFooterComponent: React.FC = () => {
  return (
    <div className="sidebar-footer-container">
      
      {/* Profile Info */}
      <div className="sidebar-footer-profile-container group/footer">
        <div className="sidebar-footer-profile-image-container">
          <Image
            src="/image/png/dummy-profile-img.png"
            alt="profile-pic"
            fill
            sizes="100%"
            className="object-cover h-full"
          />
        </div>
        <div className="sidebar-footer-profile-info-container ">
          <div className="text-[14.5px] leading-[12px]">Marice Cervantes</div>
          <div className="text-[12px]">marice@gmail.com</div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col gap-[10px]">
        {footerData.map((item, index) => (
          <div key={index} className="sidebar-footer-menu">
            <span className="text-[#1A1D49]">{item.icon}</span>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarFooterComponent;
