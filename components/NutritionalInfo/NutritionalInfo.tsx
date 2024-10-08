/**
 * This code was generated by Builder.io.
 */
import React from "react";
import NutritionalInfoItem from "./NutritionalInfoItem";

interface NutritionalData {
  label: string;
  value: string;
}

const nutritionalData: NutritionalData[] = [
  { label: "Calories", value: "500" },
  { label: "Total Fat", value: "40g" },
  { label: "Cholesterol", value: "20mg" },
  { label: "Sodium", value: "500mg" },
  { label: "Total Carbohydrates", value: "35g" },
  { label: "Protein", value: "10g" },
];

const NutritionalInfo: React.FC = () => {
  return (
    <section className="box-border flex relative flex-col shrink-0">
      <h2 className="px-4 pt-5 pb-3 w-full text-2xl font-bold leading-none text-stone-900 max-md:max-w-full">
        Nutritional Info
      </h2>
      <div className="flex flex-col p-4 w-full text-sm max-md:max-w-full">
        {nutritionalData.map((item, index) => (
          <NutritionalInfoItem
            key={index}
            label={item.label}
            value={item.value}
            isWide={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default NutritionalInfo;
