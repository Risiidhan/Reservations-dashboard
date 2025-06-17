"use client";

import { DatePicker } from "@/components/date-picker";
import { NumberInput } from "@/components/number-input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { DateRange } from "react-day-picker";

const Page = () => {
  const [singleDate, setSingleDate] = useState<DateRange | undefined>(
    undefined,
  );

  return (
    <div>
      <NumberInput min={0} max={20} inputClassName="w-[500px]" />
      <Checkbox variant={"warn"} />
      <DatePicker
        date={singleDate}
        setDate={setSingleDate}
        mode="range"
        onSelect={(value) => {
          setSingleDate(value);
          console.log(value);
        }}
      />
    </div>
  );
};

export default Page;
