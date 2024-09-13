/**
 * This code was generated by Builder.io.
 */
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex gap-4 items-center self-stretch my-auto">
      <div className="flex flex-col self-stretch my-auto w-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/33f2d4776e95983bf7d1500266c121a352f4e244adf462827075a4d0bb18e399?placeholderIfAbsent=true&apiKey=4acd4cdcb7dc4d7e9af8a5ed4cd634ea"
          className="object-contain flex-1 w-4 aspect-square"
          alt="Foodie logo"
        />
      </div>
      <div className="self-stretch my-auto text-lg font-bold leading-none whitespace-nowrap text-stone-900 w-[62px]">
        Foodie
      </div>
    </div>
  );
};

export default Logo;
