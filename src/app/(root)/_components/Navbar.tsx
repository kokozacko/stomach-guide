import { ArrowRight, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-center h-32 ">
      <div className="container flex items-center gap-10 px-4">
        <div className="flex items-center gap-4 text-2xl">
          <PlusCircle className="w-14 h-14" />
          <span>
            Poradnik dla ludzi <br />z chorobami żołądka
          </span>
        </div>
        <div className="grow flex items-center justify-center text-xl gap-28 ">
          <Link href="#" className="hover:drop-shadow-glow">
            Pytania i odpowiedzi
          </Link>
          <Link className="hover:drop-shadow-glow" href="#">
            Baza wiedzy
          </Link>
        </div>
        <Link
          href="/"
          className="bg-white group text-indigo-950 hover:text-indigo-950 px-10 py-4 text-lg font-bold rounded-full flex items-center gap-4"
        >
          Znajdź specjalistę
          <ArrowRight className="h-8 w-8 group-hover:animate-right" />
        </Link>
      </div>
    </nav>
  );
};
