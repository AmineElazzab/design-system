import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

interface CheckboxProps
  extends Omit<ComponentProps<"input">, "size">,
    VariantProps<typeof checkboxStyles> {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "light"
    | "dark";
}

const checkboxStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "flex",
    "items-center",
  ],
  {
    variants: {
      size: {
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
      },
      color: {
        primary: "text-primary-500",
        secondary: "text-secondary-500",
        danger: "text-red-500",
        warning: "text-yellow-500",
        success: "text-green-500",
        info: "text-blue-500",
        light: "text-gray-500",
        dark: "text-gray-900",
      },
    },
  }
);

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      checked,
      disabled,
      onChange,
      isLoading,
      size = "md",
      color = "primary",
      ...props
    },
    ref
  ) => {
    const styles = checkboxStyles({ size, color });
    return (
      <label className={cn(styles, "relative")}>
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          disabled={disabled || isLoading}
          onChange={onChange}
          {...props}
        />
        <span
          className={cn(
          
          )}
        />
        {label && (
          <span
            className={cn(
              "ml-3",
              "text-sm",
              "font-medium",
              "text-gray-900",
              "select-none"
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);
