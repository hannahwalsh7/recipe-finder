/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface FilterOptionProps {
  label: string;
  isSelected: boolean;
}

const FilterOption: React.FC<FilterOptionProps> = ({ label, isSelected }) => {
  return (
    <div
      className={`flex gap-4 items-center p-4 ${
        isSelected ? "" : "mt-3"
      } w-full rounded-xl border border-solid border-stone-300`}
    >
      <div
        className={`flex overflow-hidden flex-col justify-center self-stretch px-1 py-2 my-auto w-5 rounded-xl border-2 border-solid ${
          isSelected ? "border-orange-500" : "border-stone-300"
        }`}
      >
        {isSelected && (
          <div className="flex shrink-0 w-2 h-2 bg-orange-500 rounded-full" />
        )}
      </div>
      <div className="flex flex-col self-stretch my-auto text-sm font-medium whitespace-nowrap text-stone-900 w-[220px]">
        <div className="flex-1 max-w-full w-[220px]">{label}</div>
      </div>
    </div>
  );
};

export default FilterOption;
