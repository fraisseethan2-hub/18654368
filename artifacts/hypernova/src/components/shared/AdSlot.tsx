import React from "react";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  className?: string;
  type?: "banner" | "rectangle";
}

export function AdSlot({ className, type = "banner" }: AdSlotProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-muted/30 border border-border/50 rounded-sm overflow-hidden",
        type === "banner" ? "min-h-[90px] w-full max-w-[728px] mx-auto" : "min-h-[250px] w-[300px] mx-auto",
        className
      )}
      data-ad-slot="true"
      data-testid={`ad-slot-${type}`}
    >
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-2 font-medium">Publicité</span>
      <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 text-sm">
        Espace publicitaire
      </div>
    </div>
  );
}
