"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/utils/index";
import { cva, VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
  "peer size-4 shrink-0 rounded-[2px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
  {
    variants: {
      variant: {
        default:
          "border-foreground data-[state=checked]:border-foreground data-[state=checked]:bg-foreground data-[state=checked]:text-background",
        primary:
          "border-primary data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        destructive:
          "border-destructive-foreground data-[state=checked]:border-destructive-foreground  data-[state=checked]:text-destructive-foreground data-[state=checked]:bg-destructive",

        success:
          "border-success-foreground data-[state=checked]:border-success-foreground  data-[state=checked]:text-success-foreground data-[state=checked]:bg-success",
        pending:
          "border-pending-foreground data-[state=checked]:border-pending-foreground  data-[state=checked]:text-pending-foreground data-[state=checked]:bg-pending",
      },
      size: {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

function Checkbox({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        checkboxVariants({ variant, size }),
        "cursor-pointer active:scale-95",
        className,
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none">
        <CheckIcon className="h-full w-full" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
