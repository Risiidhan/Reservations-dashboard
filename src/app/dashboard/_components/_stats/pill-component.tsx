import { StatDownArrowIcon } from "@/assets/icons/stat-down-arrow-icon";
import { StatUpArrowIcon } from "@/assets/icons/stat-up-arrow-icon";
import { PillIconType } from "@/constants/enums";
import { FC } from "react";

type PillComponentProps = {
  type: PillIconType;
  value: string;
};

const pillTypes = {
  grows: {
    bgColor: "#70D6953D",
    textColor: "#24875F",
    icon: <StatUpArrowIcon />,
  },
  falls: {
    bgColor: "#FC6077",
    textColor: "#FFFFFF",
    icon: <StatDownArrowIcon />,
  },
};
export const PillComponent: FC<PillComponentProps> = ({ value, type }) => {
  return (
    <div
      style={{
        backgroundColor: pillTypes[type]?.bgColor,
        color: pillTypes[type]?.textColor,
      }}
      className="flex items-center gap-[6px] rounded-[12.5px] px-[8px] py-[1px]">
      {pillTypes[type]?.icon}
      <div
        style={{ color: pillTypes[type]?.textColor }}
        className="flex-center text-[13px] font-[700]">
        {value}
      </div>
    </div>
  );
};
