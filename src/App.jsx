import React from "react";
import Star from "./assets/icon-star.svg";
import BackGroundImg from "./components/BackGroundImg";
import Accordion from "./components/Accordion";
import { faq } from "./data";

const App = () => {
  return (
    <main className="relative min-h-screen p-4 pb-10 bg-lightPink">
      <BackGroundImg />

      <section className="relative flex flex-col max-w-xs gap-4 p-4 mx-auto mt-40 transition-all bg-white rounded-lg sm:max-w-2xl sm:mt-24">
        <h1 className="flex items-center gap-4">
          <img src={Star} alt="" className="" />

          <span className="text-4xl font-bold">FAQS</span>
        </h1>

        <div className="flex flex-col gap-4 divide-y">
          {faq.map((d, i) => {
            <Accordion
              key={i}
              question={d.questions}
              answer={d.answers}
              isAccordfion={d.isAccordion}
            />;
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
