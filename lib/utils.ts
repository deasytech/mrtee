import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const naira = (amount: number) => {
  return `₦${new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "NGN",
    currencyDisplay: "code",
  }).format(amount).replace("NGN", "")}`;
};


export const fancyDate = (rawDate: string | number | Date): string => {
  const date = new Date(rawDate);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthIndex = date.getMonth();
  const monthName = months[ monthIndex ];

  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;

  return `${monthName} ${formattedDay}, ${year}`;
};

export const toTitleCase = (str: any) => {
  return str.toLowerCase().split(' ').map((word: any) => {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

export const removeHyphenAndCapitalize = (input: string): string => {
  return input
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}