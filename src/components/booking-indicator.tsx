import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, ReactNode } from "react";

const statusVariant = cva(
  "flex flex-col items-center justify-center rounded-xl gap-1 p-4",
  {
    variants: {
      variant: {
        default: "bg-background border border-foreground text-foreground",
        primary: "bg-primary text-primary-foreground border border-primary",
        destructive:
          "bg-destructive-secondary text-destructive-foreground border border-destructive",
        success:
          "bg-success-secondary text-success-foreground border border-success",
        warn: "bg-warn-secondary text-warn-foreground border border-warn",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BookingIndicatorProps = {
  children: ReactNode;
  className?: string;
  variant?: VariantProps<typeof statusVariant>["variant"];
};

export const BookingIndicator: FC<BookingIndicatorProps> = ({
  children,
  className,
  variant,
}) => {
  return (
    <div className={cn(statusVariant({ variant }), className)}>{children}</div>
  );
};
