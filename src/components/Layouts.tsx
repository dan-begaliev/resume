import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const $section = cva(
  "py-14 md:py-[72px] flex flex-col items-center gap-10 relative",
  {
    variants: {
      container: {
        default: "container mx-auto px-6",
        full: "",
      },
    },
    defaultVariants: {
      container: "default",
    },
  },
);

type SectionProps = React.AllHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof $section>;

export function Section({ className, container, ...props }: SectionProps) {
  return (
    <section className={cn($section({ container }), className)} {...props} />
  );
}
