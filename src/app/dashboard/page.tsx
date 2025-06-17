import { NumberInput } from "@/components/number-input";
import { Checkbox } from "@/components/ui/checkbox";

const Page = () => {
  return (
    <div>
      <NumberInput min={0} max={20} inputClassName="w-[500px]" />
      <Checkbox variant={"warn"} />
    </div>
  );
};

export default Page;
