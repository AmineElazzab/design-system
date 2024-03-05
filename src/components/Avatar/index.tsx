import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

type ImageProps = "rounded" | "square" | null;

interface AvatarProps extends DivProps, VariantProps<typeof avatarStyles> {
  children?: JSX.Element | string | string[];
  src?: string;
  verified?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "light"
    | "dark"
    | "none";
  size: "sm" | "md" | "lg" | "xl";
  alt?: string;
  imageProps?: ImageProps;
  radius?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  variant?: "filled" | "outlined" | "ghost" | "light";
}

const avatarStyles = cva(
  [
    "w-full",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "size-16",
    "text-black",
    "justify-center",
    "items-center",
    "flex",
  ],
  {
    variants: {
      color: {
        primary: "text-white bg-primary-500",
        secondary: "text-white bg-secondary-500",
        danger: "text-white bg-red-500",
        warning: "text-white bg-yellow-500",
        success: "text-white bg-green-500",
        info: "text-white bg-blue-500",
        light: "text-gray-900 bg-gray-100",
        dark: "text-white bg-gray-900",
        none: "text-white bg-transparent",
      },
      size: {
        sm: "w-fit h-fit",
        md: "w-fit h-fit",
        lg: "w-fit h-fit",
        xl: "w-16 h-16",
      },
      imageProps: {
        rounded: "rounded-full",
        square: "rounded-none",
      },
      radius: {
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        className: "bg-primary-light text-primary-normal",
      },
    ],
    defaultVariants: {
      color: "secondary",
      size: "xl",
      radius: "full",
    },
  }
);
type DivProps = Omit<ComponentProps<"div">, "color" | "size">;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ color, size, className, src, verified, children, ...props }) => {
    return (
      <div
        className={cn(avatarStyles({ color, size, className }), className)}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt="avatar"
            className={cn(avatarStyles({ size: "xl", imageProps: "rounded" }))}
          />
        ) : (
          children
        )}
        {verified && (
          <span className="absolute right-3 top-1 w-4 h-4 bg-primary-500 rounded-full border-2 border-white" />
        )}
      </div>
    );
  }
);
