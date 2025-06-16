"use client";

import { MinusIcon } from "@/assets/icons/minus-icon";
import { PlusIcon } from "@/assets/icons/plus-icon";
import { CustomNumberInput } from "@/types/ui";
import { cn } from "@/utils";
import { FC, useState } from "react";

export const NumberInput: FC<CustomNumberInput> = ({
  min,
  max,
  inputClassName,
  className,
  disabled,
}) => {
  const [value, setValue] = useState<number>(min);
  const handleMinMax = (value: number) => {
    return Math.min(max, Math.max(min, value));
  };

  const increament = () => {
    if (disabled) return;
    setValue((prev: number) => handleMinMax(prev + 1));
  };
  const decreament = () => {
    if (disabled) return;
    setValue((prev: number) => handleMinMax(prev - 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setValue(min);
      return;
    }
    const newVal = parseInt(e.target.value, 10);
    if (!isNaN(newVal)) {
      setValue(handleMinMax(newVal));
    }
  };

  return (
    <div
      className={cn(
        "flex w-fit overflow-hidden rounded-[6px] border border-[#E5E7EB]",
        className,
      )}>
      <div
        onClick={decreament}
        className="group flex cursor-pointer items-center justify-center bg-[#F3F4F6] p-3 select-none hover:bg-[#dfdfdf]">
        <div
          className={`transition-transform ${!disabled ? "group-active:scale-90" : ""}`}>
          <MinusIcon />
        </div>
      </div>
      <input
        disabled={disabled}
        type="number"
        value={value}
        onChange={handleChange}
        className={cn(
          "border-x border-[#E5E7EB] bg-white text-center select-none focus-visible:outline-0",
          disabled ? "bg-muted" : "",
          inputClassName,
        )}
      />
      <div
        onClick={increament}
        className={cn(
          "group flex cursor-pointer items-center justify-center bg-[#F3F4F6] p-3 select-none hover:bg-[#dfdfdf]",
          disabled ? "opacity-50" : "",
        )}>
        <div
          className={`transition-transform ${!disabled ? "group-active:scale-90" : ""}`}>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};
