import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva(
  [
    "w-full",
    "border-2",
    "border-gray-200",
    "p-5",
    "rounded-md",
    "transition-all",
    "duration-100",
    "outline-none",
    "focus:outline-primary-500 ",
    "focus:border-transparent",
    "placeholder:text-gray-400",
    "placeholder:text-sm",
  ],
  {
    variants: {
      disabled: {
        true: "bg-gray-100 cursor-not-allowed",
      },
      error: {
        true: "border-red-500",
      },
      pointer: {
        true: "cursor-pointer",
      },
      radius: {
        number: "rounded-[number]",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
      },
      required: {
        true: "required",
      },
      size: {
        sm: "p-3",
        md: "p-5",
        lg: "p-7",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      disabled,
      error,
      pointer,
      radius,
      required,

      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        className={cn(
          inputStyles({
            className,
            size,
            disabled,
            error,
            pointer,
            radius,
            required,
          })
        )}
        {...props}
      />
    );
  }
);
