import React from "react";
import { cn } from "@/app/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const containerVarients = cva("mx-auto px-4 sm:px-6 lg:px-8 relative", {
  variants: {
    size: {
      default: "max-w-7xl",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
    },
  },
});

function Container() {
  return <div>container</div>;
}

export default Container;
