import { DatePickerComponent } from "@/components/DatePickerComponent";
import SelectComponent from "@/components/SelectComponent";
import { Input } from "@/components/ui/input";
import React from "react";

const FilterSectionComponent = () => {
  return (
    <div className="@container w-full bg-white rounded-[15px] px-3 py-5 flex flex-col @3xl:flex-row justify-between @3xl:items-center gap-3 shadow">
      <div className="grid grid-cols-2 @lg:grid-cols-4 gap-2">
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
