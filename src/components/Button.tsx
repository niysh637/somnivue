import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


type Variant = "dark" | "light" | "bg-invisible";

type ButtonProps = {
    variant?: Variant,
} & ComponentProps<"button">;


export function Button({ variant = "dark", className, ...props } : ButtonProps) {
    return (
      <button {...props} className={twMerge(getVariantStyles(variant), "flex justify-center rounded-lg px-2 py-1 text-lg font-bold transition-colors disabled:opacity-30 disabled:cursor-not-allowed", className)} />
    );
}

function getVariantStyles(variant: Variant) {
    switch (variant) {
        case "dark":
            return "bg-neutral-700 text-white hover:bg-neutral-200 hover:text-neutral-700";
        case "light":
            return "bg-white text-neutral-700 hover:bg-neutral-700 hover:text-neutral-200";
        case "bg-invisible":
            return "bg-zinc-100 hover:bg-neutral-700 text-neutral-700 hover:text-neutral-100";
        default:
            throw new Error(`Invalid variant: ${variant satisfies never}`);
    }
}