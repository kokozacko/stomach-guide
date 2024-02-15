import { ArrowRight, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { HamburgerMenu } from "./HamburgerMenu";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-center h-24 md:h-32 fixed bg-indigo-950 z-50 ">
      <div className="container flex justify-between items-center gap-10 px-4">
        <Link href="/">
          <div className="flex items-center gap-4 md:text-2xl">
            <PlusCircle className="w-14 h-14" />
            <span>
              Poradnik dla ludzi <br />z chorobami żołądka
            </span>
          </div>
        </Link>
        <div className="grow hidden md:flex items-center justify-center text-xl gap-28  ">
          <Link href="/#questions" className="hover:drop-shadow-glow">
            Pytania i odpowiedzi
          </Link>
          <Link className="hover:drop-shadow-glow" href="/#knowledge">
            Baza wiedzy
          </Link>
        </div>
        <Link
          href="https://www.znanylekarz.pl/choroby/choroby-zoladka"
          className="bg-white group text-indigo-950 hover:text-indigo-950 hidden px-10 py-4  text-lg font-bold rounded-full md:flex items-center gap-4"
        >
          Znajdź specjalistę
          <ArrowRight className="h-8 w-8 group-hover:animate-right" />
        </Link>
        <HamburgerMenu />
      </div>
    </nav>
  );
};
