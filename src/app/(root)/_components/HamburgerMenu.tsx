"use client";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden cursor-pointer w-12 h-12 relative">
      <div
        className="absolute top-0 left-0 z-[200]"
        onClick={() => setOpen((p) => !p)}
      >
        {open ? <X className="w-12 h-12" /> : <Menu className="w-12 h-12" />}
      </div>
      <motion.div
        initial={{ translateX: "100%" }}
        animate={{ translateX: open ? 0 : "100%" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="fixed left-0 z-[100] top-0 backdrop-blur-sm w-full h-screen flex justify-end gap-10 pb-10 flex-col px-10"
      >
        <Link
          onClick={() => setOpen(false)}
          href="/#questions"
          className="hover:drop-shadow-glow text-4xl text-indigo-100 font-bold"
        >
          Pytania i odpowiedzi
        </Link>
        <Link
          onClick={() => setOpen(false)}
          className="hover:drop-shadow-glow text-4xl text-indigo-100 font-bold"
          href="/#knowledge"
        >
          Baza wiedzy
        </Link>

        <Link
          href="https://www.znanylekarz.pl/choroby/choroby-zoladka"
          className="bg-white group text-indigo-950 hover:text-indigo-950 w-max  px-10 py-4  text-lg font-bold rounded-full flex items-center gap-4"
        >
          Znajdź specjalistę
          <ArrowRight className="h-8 w-8 group-hover:animate-right" />
        </Link>
      </motion.div>
    </div>
  );
};
