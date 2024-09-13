/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface BreakfastProps {
  title: string;
}

const Breakfast: React.FC<BreakfastProps> = ({ title }) => {
  return (
    <section className="flex gap-4 items-center px-4 w-full whitespace-nowrap bg-stone-50 min-h-[56px]">
      <h2 className="overflow-hidden flex-1 shrink self-stretch my-auto w-full">
        {title}
      </h2>
    </section>
  );
};

export default Breakfast;
