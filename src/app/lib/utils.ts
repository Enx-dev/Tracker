import { Priority, Status } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStatusColor(status: Status) {
  switch (status) {
    case "PENDING":
      return "text-yellow-500";
    case "COMPLETED":
      return "text-green-500";
    default:
      return "text-red-500";
      break;
  }
}

export function getPriorityColor(priority: Priority) {
  switch (priority) {
    case "LOW":
      return "text-green-500";
    case "MEDUIM":
      return "text-yellow-500";
    case "HIGH":
      return "text-red-500";
    default:
      return "text-gray-500";
      break;
  }
}
