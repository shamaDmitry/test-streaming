import { IData } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const uuid = () => v4();

export const shuffleArray = (arr: IData[]) => {
  const _arr = [...arr];

  return _arr.sort(() => Math.random() - 0.5);
};
