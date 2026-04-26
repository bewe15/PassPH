import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "free" | "basic" | "pro" | "default";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide",
        {
          "bg-slate-100 text-slate-600": variant === "free" || variant === "default",
          "bg-cyan-100 text-cyan-700": variant === "basic",
          "bg-cyan-500 text-white": variant === "pro",
        },
        className
      )}
      {...props}
    />
  );
}
