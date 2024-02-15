import { Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryTileProps {
  imgSrc: string;
  title: string;
  category: string;
  author: string;
  slug: number;
}

export const CategoryTile: React.FC<CategoryTileProps> = ({
  author,
  category,
  imgSrc,
  title,
  slug,
}) => {
  console.log(slug);
  return (
    <Link href={`/posts/${slug.toString()}`} className="">
      <div
        className="flex flex-col h-full border rounded-2xl overflow-hidden border-indigo-400 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] duration-[1200ms]
       bg-[length:250%_200%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] "
      >
        <div className="w-full h-64 relative border-b border-indigo-400">
          <Image fill src={imgSrc} alt={title} className="object-cover" />
        </div>
        <div className="p-4 py-8 flex flex-col grow gap-6">
          <div className="mb-10 grow">
            <h5 className="text-2xl text-indigo-100">{title}</h5>
          </div>
          <div className="flex gap-4  md:gap-36">
            <div className="flex items-center gap-2">
              <User className="text-indigo-600" /> <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="text-indigo-600" />{" "}
              <span className="capitalize">{category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
