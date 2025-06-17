"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { FC, useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { ChevronDownIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/utils";
import { Calendar } from "./ui/calendar";

type DatePickerMode =
  | {
      date: Date | undefined;
      mode: "single";
      onSelect: (value: Date) => void;
      setDate: (value: Date) => void;
    }
  | {
      date: Date[] | undefined;
      mode: "multiple";
      onSelect: (value: Date[]) => void;
      setDate: (value: Date[]) => void;
    }
  | {
      date: DateRange | undefined;
      mode: "range";
      onSelect: (value: DateRange) => void;
      setDate: (value: DateRange) => void;
    };

type DatePickerProps = {
  label?: string;
  className?: string;
} & DatePickerMode;

export const DatePicker: FC<DatePickerProps> = ({
  label,
  mode = "single",
  onSelect,
  className,
  date,
}) => {
  const [open, setOpen] = useState(false);

  const showDate = () => {
    if (!date) return "Select a date";
    if (date instanceof Date) return date.toLocaleDateString();
    if (Array.isArray(date))
      return date.map((d) => d.toLocaleDateString()).join(" - ");
    if ("from" in date && "to" in date) {
      const from = date.from?.toLocaleDateString();
      const to = date.to?.toLocaleDateString();
      return from && to ? `${from} - ${to}` : from || "Select a date";
    }
    return "Select a date";
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Label htmlFor="date" className="px-1">
        {label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal">
            {showDate()}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          {/* @ts-expect-error Because Calendar's props typings don't handle union mode well */}
          <Calendar
            mode={mode}
            required
            selected={date}
            onSelect={onSelect}
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
