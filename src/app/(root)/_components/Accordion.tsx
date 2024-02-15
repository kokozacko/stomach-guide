"use client";
import { cn } from "@/lib/utlis";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  text: string;
}
export const Accordion: React.FC<AccordionProps> = ({ text, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" rounded-3xl bg-gradient-to-r basis-1/2  from-indigo-900  to-indigo-600 p-8 h-full">
      <div
        className="flex justify-between items-center md:items-start cursor-pointer"
        onClick={() => setOpen((p) => !p)}
      >
        <h4 className=" text-xl md:text-2xl font-bold">{title}</h4>
        {open ? (
          <Minus className="h-10 w-10" />
        ) : (
          <Plus className="h-10 w-10" />
        )}
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
