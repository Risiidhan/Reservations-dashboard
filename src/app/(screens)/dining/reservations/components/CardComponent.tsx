import SvgIcon from "@/components/SvgIcon";
import { ReservationCardType } from "@/types/ReservationCardType";
import React, { ReactNode } from "react";

const CardComponent: React.FC<ReservationCardType> = ({
  icon,
  title,
  value,
  indicator,
  iconBg,
  indicatorType,
}) => {
  const generatorIndicator = () => {
    if (indicatorType == "text") {
      return indicator;
    } else {
      let iconName = indicatorType == "down" ? "arrowDown" : "arrowUp";

      return (
        <div className="flex items-center gap-3">
          <SvgIcon name={iconName} width={12} height={16} />
          <div className="font-[600] text-[15px]">{indicator}</div>
        </div>
      );
    }
  };

  return (
    <div className=" flex items-center  gap-[16px] bg-white py-[12px] px-[8px] rounded-[9px] shadow">
      <div
        style={{ backgroundColor: iconBg }}
        className="w-[46px] h-[46px] flex items-center justify-center rounded-[7px]"
      >
        <SvgIcon name={icon} width={24} height={27} />
      </div>
      <div className="flex flex-col">
        <div className="text-[15px] text-[#6B7280]">{title}</div>
        <div className="flex gap-[8px] items-baseline">
          <div className="font-[600] text-[#111827] text-[30px] leading-[30px]">
            {value}
          </div>
          {generatorIndicator()}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
