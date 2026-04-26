import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-normal rounded-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "bg-cyan-500 text-white hover:bg-cyan-600 active:scale-95": variant === "primary",
          "border border-cyan-500 text-cyan-500 hover:bg-cyan-50 active:scale-95": variant === "outline",
          "text-slate-600 hover:bg-slate-100 active:scale-95": variant === "ghost",
          "bg-red-500 text-white hover:bg-red-600 active:scale-95": variant === "danger",
        },
        {
          "text-sm px-3 py-1.5": size === "sm",
          "text-sm px-4 py-2.5": size === "md",
          "text-base px-6 py-3": size === "lg",
        },
        className
      )}
      {...props}
    />
  );
}
