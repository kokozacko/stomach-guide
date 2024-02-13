import { categories } from "../data/constans";
import { Accordion } from "./_components/Accordion";
import { Categories } from "./_components/Categories";
import { CategoryBadge } from "./_components/CategoryBadge";
import Hero from "./_components/Hero";
import { Questions } from "./_components/Questions";

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100vh-8rem)] flex pb-6 px-4 ">
        <Hero />
      </section>
      <section className=" px-4 flex flex-col gap-4">
        <Questions />
      </section>
      <section className="min-h-screen">
        <h3 className="text-2xl text-indigo-50 border-b pb-2 border-indigo-800 mb-6">
          Kategorie
        </h3>
        <Categories />
      </section>
    </>
  );
}
