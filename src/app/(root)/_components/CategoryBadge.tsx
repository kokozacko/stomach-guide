import { cn } from "@/lib/utlis";
import React from "react";

interface CategoryBadgeProps {
  category: string;
  onChoose: () => void;
  selected?: boolean;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  onChoose,
  selected,
}) => {
  return (
    <div
      onClick={onChoose}
      className={cn(
        "px-4 py-2 border border-indigo-100 rounded-full cursor-pointer hover:bg-indigo-100 hover:text-indigo-950 transition-colors duration-500",
        selected && "bg-indigo-100 text-indigo-950"
      )}
    >
      {category}
    </div>
  );
};
