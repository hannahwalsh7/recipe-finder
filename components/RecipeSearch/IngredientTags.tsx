import React from "react";

interface IngredientTagProps {
  name: string;
}

const IngredientTag: React.FC<IngredientTagProps> = ({ name }) => (
  <div className="flex gap-2 justify-center items-center px-4 rounded-xl bg-stone-200 min-h-[32px]">
	<div className="flex-1 shrink self-stretch my-auto w-full">{name}</div>
  </div>
);

interface IngredientTagsProps {
  ingredients: string[];
}

const IngredientTags: React.FC<IngredientTagsProps> = ({ ingredients }) => {
  return (
	<section className="flex flex-wrap gap-3 items-start py-3 pr-4 pl-3 w-full text-sm font-medium whitespace-nowrap text-stone-900 max-md:max-w-full">
	  {ingredients.map((ingredient) => (
		<IngredientTag key={ingredient} name={ingredient} />
	  ))}
	</section>
  );
};

export default IngredientTags;