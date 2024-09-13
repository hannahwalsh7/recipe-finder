/**
 * This code was generated by Builder.io.
 */
import React from "react";

const Pagination: React.FC = () => {
  return (
    <nav
      className="flex flex-wrap justify-center items-center p-4 w-full max-md:max-w-full"
      aria-label="Pagination"
    >
      <button
        className="flex justify-center items-center self-stretch my-auto w-10 min-h-[40px]"
        aria-label="Previous page"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/080670cac6879e72bf5c3a4e87a1b6e6c046f56311acc6cfe8a2d8bea9f33a77?placeholderIfAbsent=true&apiKey=4acd4cdcb7dc4d7e9af8a5ed4cd634ea"
          alt=""
          className="object-contain flex-1 w-full aspect-square"
        />
      </button>
      <button
        className="self-stretch my-auto w-10 h-10 text-sm font-bold whitespace-nowrap rounded-3xl bg-stone-200 min-h-[40px] text-stone-900"
        aria-current="page"
      >
        1
      </button>
      <button className="self-stretch my-auto w-10 text-sm whitespace-nowrap rounded-3xl min-h-[40px] text-stone-900">
        2
      </button>
      <button className="self-stretch my-auto w-10 text-sm whitespace-nowrap rounded-3xl min-h-[40px] text-stone-900">
        3
      </button>
      <button className="self-stretch my-auto w-10 text-sm whitespace-nowrap rounded-3xl min-h-[40px] text-stone-900">
        4
      </button>
      <button className="self-stretch my-auto w-10 text-sm whitespace-nowrap rounded-3xl min-h-[40px] text-stone-900">
        5
      </button>
      <button
        className="flex justify-center items-center self-stretch my-auto w-10 min-h-[40px]"
        aria-label="Next page"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a76ba64793c221e697dad46efa2bb7ee03430d50488bc8ca76f1fc11367dae4?placeholderIfAbsent=true&apiKey=4acd4cdcb7dc4d7e9af8a5ed4cd634ea"
          alt=""
          className="object-contain flex-1 w-full aspect-square"
        />
      </button>
    </nav>
  );
};

export default Pagination;
