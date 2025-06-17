import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, ReactNode } from "react";

const statusVariants = cva("rounded-full aspect-square w-3 h-auto", {
  variants: {
    variant: {
      default: "bg-foreground",
      primary: "bg-primary",
      destructive: "bg-destructive-foreground ",
      success: "bg-success-foreground ",
      warn: "bg-warn-foreground ",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type StatusIndicatorProps = {
  children: ReactNode;
  value: number;
  className?: string;
  variant?: VariantProps<typeof statusVariants>["variant"];
};

export const StatusIndicator: FC<StatusIndicatorProps> = ({
  children,
  className,
  variant,
  value,
}) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className={cn(statusVariants({ variant }), "")}></div>
      <div className="flex items-center gap-1">
        {children}
        <div>{value}</div>
      </div>
    </div>
  );
};
