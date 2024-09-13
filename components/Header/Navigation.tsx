/**
 * This code was generated by Builder.io.
 */
import React from "react";

const navigationItems = [
  { label: "Home", width: "w-[41px]" },
  { label: "Recipes", width: "w-14" },
  { label: "Dishes", width: "w-[47px]" },
  { label: "Cuisines", width: "w-[59px]" },
  { label: "Diet and Health", width: "w-[107px]" },
  { label: "World Cuisine", width: "w-[94px]" },
];

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap gap-9 items-center text-sm font-medium min-h-[40px] min-w-[240px] text-stone-900 max-md:max-w-full">
      {navigationItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className={`self-stretch my-auto whitespace-nowrap ${item.width}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
