import { cva } from "class-variance-authority";
import React from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
      },
      size: {
        default: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function Button({ children, className, variant, size, ...props }) {
  return (
    <button
      className={buttonStyles({ variant, size }) + " " + className}
      {...props}
    >
      {children}
    </button>
  );
}
