import SvgIcon from "@/components/SvgIcon";
import React, { ReactNode } from "react";

type PillComponentProps = {
  type: "grows" | "falls";
  value: string;
};

const pillTypes = {
  grows: {
    bgColor: "#70D6953D",
    textColor: "#24875F",
    icon: <SvgIcon name="pillArrowUp" width={"15px"} height={"9.5px"} />,
  },
  falls: {
    bgColor: "#FC6077",
    textColor: "#FFFFFF",
    icon: <SvgIcon name="pillArrowDown" width={"15px"} height={"9.5px"} />,
  },
};

const PillComponent: React.FC<PillComponentProps> = ({ value, type }) => {
  return (
    <div
      style={{ backgroundColor: pillTypes[type]?.bgColor }}
      className="flex gap-[6px] px-[8px] py-[1px] rounded-[12.5px]"
    >
      <div className="flex-center">{pillTypes[type]?.icon}</div>
      <div
        style={{ color: pillTypes[type]?.textColor }}
        className="flex-center text-[13px] font-[700]"
      >
        {value}
      </div>
    </div>
  );
};

export default PillComponent;
