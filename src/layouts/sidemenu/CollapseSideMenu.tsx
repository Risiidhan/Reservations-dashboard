"use client";
import "./style.css";

import React from "react";
import { useSidebar } from "@/components/ui/sidebar";
import SvgIcon from "@/components/SvgIcon";

const CollapseSideMenu: React.FC = () => {
  const { open, setOpen } = useSidebar();

  return (
    <div className="sidebar-toggle " onClick={() => setOpen(!open)}>
      <div className={`${open ? "" : "scale-x-[-1]"} smooth-transition`}>
        <SvgIcon name="collapseIcon" width={18} height={18} />
      </div>
    </div>
  );
};

export default CollapseSideMenu;
