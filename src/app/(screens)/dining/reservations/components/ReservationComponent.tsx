import React from 'react'

const ReservationComponent = () => {
  return (
     <div className="flex flex-col w-full gap-[40px]">
      <div className="">
        <div className="dashboard-heading leading-[2.5rem] mb-3">Here’s what happening</div>
        <div className="dashboard-subheading">
          <span className="font-[600]">Good morning, Marice!</span>
          {" "}Here's a delightful insight of your Dashboard today.
        </div>
      </div>

      <div className="quick-analytic-row">
      </div>

      <div className="chart-row">
      </div>
    </div>
  )
}

export default ReservationComponent