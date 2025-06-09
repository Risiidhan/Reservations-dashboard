import React from "react";
import "../style.css";
import SvgIcon from "@/components/SvgIcon";
import FilterSectionComponent from "./FilterSectionComponent";
import CardContainerComponent from "./CardContainerComponent";

const ReservationComponent = () => {
  return (
    <div className="flex flex-col w-full gap-[40px]">
      <div className="flex justify-between items-center">
        <div>
          <div className="content-heading leading-[2.5rem] mb-3">
            Reservation Overview
          </div>
          <div className="content-subheading">
            Manage all your restaurant table reservations in one place
          </div>
        </div>

        <div className="reservation-btn hover-effect onclick-effect">
          <SvgIcon name="plusIcon" width={"12.8px"} height={"12.8px"} />
          New Reservation
        </div>
      </div>

      <div className="filter-section">
        <FilterSectionComponent />
      </div>

      <div className="card-row">
        <CardContainerComponent />
      </div>
    </div>
  );
};

export default ReservationComponent;
