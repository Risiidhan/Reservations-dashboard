"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../style.css"

const timeSlots = [
  { time: "12:00 PM", status: "Available" },
  { time: "1:00 PM", status: "Booked" },
  { time: "2:00 PM", status: "Available" },
  { time: "3:00 PM", status: "Limited" },
  { time: "4:00 PM", status: "Available" },
  { time: "5:00 PM", status: "Booked" },
];

type statusStyleType = {
    backgroundColor: string, 
    color: string,
    border: string
}
const statusStyles: Record<string, statusStyleType> = {
  Available: {backgroundColor: "#D1FAE5", color: "#059669", border: "1px solid #A7F3D0"},
  Booked: {backgroundColor: "#FEE2E2", color: "#DC2626", border: "1px solid #FECACA"},
  Limited: {backgroundColor: "#FEF3C7", color: "#D97706", border: "1px solid #FDE68A"},
};

const SwiperComponent = () => {
  return (
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="!w-full"
        style={{ width: '100%' }}
      >
        {timeSlots.map((slot, index) => (
          <SwiperSlide key={index}>
            <div
              className={`rounded-[13px] px-4 py-3 flex-center flex-col shadow-sm`}      
              style={statusStyles[slot.status]}
            >
              <div className="text-base font-semibold">{slot.time}</div>
              <div>{slot.status}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default SwiperComponent;
