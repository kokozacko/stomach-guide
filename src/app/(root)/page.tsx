import { Categories } from "./_components/Categories";

import Hero from "./_components/Hero";
import { Questions } from "./_components/Questions";

export default function Home() {
  return (
    <>
      <section className="md:min-h-screen flex pb-6 px-4 pt-32 ">
        <Hero />
      </section>
      <section className="px-4 flex flex-col gap-4" id="questions">
        <Questions />
      </section>
      <section className="min-h-screen px-4" id="knowledge">
        <h3 className="text-2xl text-indigo-50 border-b pb-2 border-indigo-800 mb-6">
          Kategorie
        </h3>
        <Categories />
      </section>
    </>
  );
}
