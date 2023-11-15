import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cls(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
