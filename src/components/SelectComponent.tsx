import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";


type SelectOption = {
  value: string;
  label: string;
};

type selectProps = {
    placeholder: string,
    valueArr: SelectOption[];
}

const SelectComponent: React.FC<selectProps> = ({placeholder, valueArr}) => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {valueArr?.map((item: SelectOption) => (
            <SelectItem value={item.value}>{item.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
