import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, ReactNode } from "react";

const statusVariants = cva("rounded-full aspect-square w-3 h-auto", {
  variants: {
    variant: {
      default: "text-foreground",
      primary: "text-primary",
      destructive: "text-destructive-foreground ",
      success: "text-success-foreground ",
      warn: "text-warn-foreground ",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type TimeSlotIndicatorProps = {
  children: ReactNode;
  className?: string;
  variant?: VariantProps<typeof statusVariants>["variant"];
  icon?: ReactNode;
  value: number;
};

export const TimeSlotIndicator: FC<TimeSlotIndicatorProps> = ({
  children,
  className,
  variant,
  icon,
  value,
}) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="aspect-square h-auto w-3">{icon}</div>
      <div className="flex items-center gap-1">
        {children}
        <div className={cn(statusVariants({ variant }), "")}>{value}</div>
      </div>
    </div>
  );
};
