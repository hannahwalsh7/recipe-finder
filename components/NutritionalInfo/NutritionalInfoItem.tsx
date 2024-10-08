/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface NutritionalInfoItemProps {
  label: string;
  value: string;
  isWide: boolean;
}

const NutritionalInfoItem: React.FC<NutritionalInfoItemProps> = ({
  label,
  value,
  isWide,
}) => {
  const containerClasses = `flex flex-col grow shrink py-5 border-t border-gray-200 ${
    isWide ? "min-w-[240px] w-[681px] max-md:max-w-full" : "w-[149px]"
  }`;

  const contentClasses = `flex flex-1 size-full ${
    isWide ? "max-md:max-w-full" : ""
  }`;

  return (
    <div
      className={`flex flex-wrap flex-1 gap-6 ${
        isWide ? "mt-6" : ""
      } size-full max-md:max-w-full`}
    >
      <div className={containerClasses}>
        <div className={`${contentClasses} text-stone-500`}>
          <div
            className={`flex-1 shrink w-full ${
              isWide ? "min-w-[240px] max-md:max-w-full" : ""
            }`}
          >
            {label}
          </div>
        </div>
        <div className={`${contentClasses} text-stone-900`}>
          <div
            className={`flex-1 shrink w-full ${
              isWide ? "min-w-[240px] max-md:max-w-full" : ""
            }`}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionalInfoItem;
