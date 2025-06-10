import React from "react";
import "../style.css";
import SvgIcon from "@/components/SvgIcon";
import FilterSectionComponent from "./FilterSectionComponent";
import CardContainerComponent from "./CardContainerComponent";
import SwiperComponent from "./SwiperComponent";
import ReservationTableComponent from "./reservation-table/ReservationTableComponent";

const ReservationComponent = () => {
  return (
    <div className="@container flex flex-col w-full max-w-full gap-[40px]">
      <div className="flex flex-col @lg:flex-row justify-between @lg:items-center">
        <div>
          <div className="content-heading leading-[2.5rem] @lg:mb-3">
            Reservation Overview
          </div>
          <div className="content-subheading">
            Manage all your restaurant table reservations in one place
          </div>
        </div>

        <div className="reservation-btn hover-effect onclick-effect mt-3 @lg:mt-0">
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

      <div className="@container time-slots max-w-full overflow-hidden">
        <SwiperComponent />
      </div>

      <div>
        <ReservationTableComponent />
      </div>
    </div>
  );
};

export default ReservationComponent;
