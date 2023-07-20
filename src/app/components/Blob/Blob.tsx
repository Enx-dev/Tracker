import { cn } from "@/app/lib/utils";
import React from "react";

function Blob({ D, fill, position }: BlobProps) {
  return (
    <svg
      className={cn(position, "absolute w-80 object-contain ")}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} d={D} transform="translate(100 100)" />
    </svg>
  );
}

export default Blob;
