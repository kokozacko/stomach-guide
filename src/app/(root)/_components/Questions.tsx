import React from "react";
import { Accordion } from "./Accordion";
import { accordions } from "@/data/constans";

export const Questions = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 h-">
          <h3 className=" text-2xl md:text-5xl pb-4 md:pb-10 text-indigo-50 font-bold">
            Pytania i odpowiedzi
          </h3>
          <p className="text-xl md:text-2xl">
            Tutaj znajdziesz odpowiedzi na najczęściej <br /> zadawane pytania
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {accordions.slice(0, 2).map((a) => (
            <Accordion key={a.title} {...a} />
          ))}
        </div>
      </div>

      <div className="h-min  grid md:grid-cols-2 gap-4">
        {accordions.slice(2).map((a) => (
          <Accordion key={a.title} {...a} />
        ))}
      </div>
    </>
  );
};
