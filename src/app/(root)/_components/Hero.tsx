import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center h-min md:h-auto p-10 rounded-3xl bg-gradient-to-r from-violet-500 to-teal-400">
      <h1 className="text-6xl font-bold text-neutral-100 pb-24">
        Poszukujesz informacji związanych z <br /> chorobami żołądka?
      </h1>
      <h2 className="text-3xl font-bold text-neutral-100 pb-4">
        Skorzystaj z Pytań i odpowiedzi, aby szybko znaleźć odpowiedź <br /> na
        najczęściej zadawane pytania.
      </h2>
      <p className="text-xl">
        Odwiedź Bazę Wiedzy, aby uzyskać inne przydatne informacje, które pomogą
        Ci zmierzyć się z chorobą lub pomogą Ci jej zapobiec
      </p>
    </div>
  );
};

export default Hero;
