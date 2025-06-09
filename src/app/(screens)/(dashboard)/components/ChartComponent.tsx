import React from "react";
import "../style.css";
import BarChartComponent from "./charts/BarChartComponent";
import { AreaChartComponent } from "./charts/AreaChartComponent";
import { RadialChartComponent } from "./charts/RadialChartComponent";
import { LineChartComponent } from "./charts/LineChartComponent";

const TimeLineComponent = () => {
  return (
    <div className="grid grid-cols-3 border border-[#CFD2D8]">
      <div className="timeline bg-[#CFCFF1]">Days</div>
      <div className="timeline bg-[#fafcff] border-x border-[#CFD2D8]">
        Month
      </div>
      <div className="timeline bg-[#fafcff]">Year</div>
    </div>
  );
};

const ChartComponent = () => {
  return (
    <div className="flex flex-col bg-white rounded-[24px] border border-[#CFD2D8]">
      <div className="header border-b border-[#CFD2D8]">
        <div className="px-[24px] py-[18px] flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-[17px] font-[600] leading-[12px]">
              Reservation Overview
            </div>
            <div className="text-[26px] font-[700]">
              9,845{" "}
              <span className="text-[14px] font-[400] text-[#9291A5]">
                past 30 days
              </span>
            </div>
          </div>
          <div>
            <TimeLineComponent />
          </div>
        </div>
      </div>
      <div className="flex flex-1 px-[24px] py-[18px] gap-0">
        <div className="flex-1">
          <LineChartComponent />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
