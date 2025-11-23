import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// able to passing many classNme
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}