import { DatePickerComponent } from "@/components/DatePickerComponent";
import SelectComponent from "@/components/SelectComponent";
import { Input } from "@/components/ui/input";
import React from "react";

const FilterSectionComponent = () => {
  return (
    <div className="w-full bg-white rounded-[15px] px-3 py-5 flex justify-between items-center shadow">
      <div className="flex gap-2">
        <SelectComponent placeholder={"select restaurant"} valueArr={[]} />
        <DatePickerComponent />
        <SelectComponent placeholder={"select table"} valueArr={[]} />
        <SelectComponent placeholder={"select status"} valueArr={[]} />
      </div>
      <div>
        <Input type="text" placeholder="search reservation" />
      </div>
    </div>
  );
};

export default FilterSectionComponent;
