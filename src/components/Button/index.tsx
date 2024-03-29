import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2 border-blue-500",
        ghost: "transition-colors duration-300 ",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-white bg-primary-500",
        secondary: "text-white bg-secondary-500",
        danger: "text-white bg-red-500",
        warning: "text-white bg-yellow-500",
        success: "text-white bg-green-500",
        info: "text-white bg-blue-500",
        light: "text-gray-900 bg-gray-100",
        dark: "text-white bg-gray-900",
      },
      disabled: {
        true: "opacity-50",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary-500 hover:bg-primary-600",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-primary-600 border-primary-500 hover:bg-primary-100 bg-transparent",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-primary-600 hover:bg-primary-100 bg-transparent",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme }), className)}
        {...props}
      />
    );
  }
);
