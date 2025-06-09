import React from "react";
import QuickAnalyticsContainer from "./QuickAnalyticsContainer";
import "../style.css"

const DashboardComponent = () => {
  return (
    <div className="flex flex-col w-full gap-[40px]">
      <div className="">
        <div className="dashboard-heading">Here’s what happening</div>
        <div className="dashboard-subheading">
          <span className="font-[600]">Good morning, Marice!</span>
          {" "}Here's a delightful insight of your Dashboard today.
        </div>
      </div>

      <div className="quick-analytic-row">
        <QuickAnalyticsContainer />
      </div>
    </div>
  );
};

export default DashboardComponent;
