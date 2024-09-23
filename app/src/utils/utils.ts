import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function imageBuilder(image: any) {
  return {
    alt: image.alt,
    url: image.asset.url,
  };
}

export const fetchSvg = async (path: string) => {
  const response = await fetch(path);
  return response.text();
};
