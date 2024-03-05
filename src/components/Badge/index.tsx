import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";



const badgeStyles = cva(
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
        light: "text-gray-900 bg-gray-100",
        filled: "text-white bg-primary-500",
        outlined:
          "text-primary-600 border-primary-500 hover:bg-primary-100 bg-transparent",
        ghost: "text-primary-600 hover:bg-primary-100 bg-transparent",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      color: {
        primary: "text-white bg-primary-500",
        secondary: "text-white bg-secondary-500",
        danger: "text-white bg-red-500",
        warning: "text-white bg-yellow-500",
        success: "text-white bg-green-500",
        info: "text-white bg-blue-500",
        light: "text-gray-900 bg-gray-100",
        dark: "text-white bg-gray-900",
      },
      radius: {
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        none: "rounded-none",
      },
      gradient: {
        true: "bg-gradient-to-r from-primary-400 to-primary-600",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        color: "primary",
        className: "bg-primary-500 hover:bg-primary-600",
      },
      {
        variant: "outlined",
        color: "primary",
        className:
          "text-primary-600 border-primary-500 hover:bg-primary-100 bg-transparent",
      },
      {
        variant: "ghost",
        color: "primary",
        className: "text-primary-600 hover:bg-primary-100 bg-transparent",
      },
      {
        variant: "light",
        color: "light",
        className: "text-gray-900 bg-gray-100",
      },
    ],
    defaultVariants: {
      variant: "filled",
      size: "md",
      color: "primary",
    },
  }
);
type BadgeProps = ComponentProps<"button"> & VariantProps<typeof badgeStyles>;

export const Badge = forwardRef<HTMLButtonElement, BadgeProps>(
  (
    { variant, size, color, className, radius, gradient, fullWidth, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          badgeStyles({ variant, size, color, radius, gradient, fullWidth }),
          className
        )}
        {...props}
      />
    );
  }
);
