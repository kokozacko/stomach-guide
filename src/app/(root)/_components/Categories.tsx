"use client";
import { categories, posts } from "@/app/data/constans";
import React, { useState } from "react";
import { CategoryBadge } from "./CategoryBadge";
import { CategoryTile } from "./CategoryTile";

export const Categories = () => {
  const [selected, setSelected] = useState("wszystkie");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-4">
        {categories.map((c) => (
          <CategoryBadge
            key={c}
            category={c}
            onChoose={() => setSelected(c.toLocaleLowerCase())}
            selected={selected === c.toLocaleLowerCase()}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {selected === "wszystkie"
          ? posts.map((p) => <CategoryTile {...p} />)
          : posts
              .filter((p) => p.category.toLocaleLowerCase() === selected)
              .map((p) => <CategoryTile {...p} />)}
      </div>
    </div>
  );
};
