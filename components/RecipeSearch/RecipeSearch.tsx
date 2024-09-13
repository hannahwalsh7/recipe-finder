/* eslint-disable react/no-unescaped-entities */
"use client";

/**
 * This code was generated by Builder.io.
 */
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import IngredientTags from "./IngredientTags";
import RecipeGrid from "./RecipeGrid";
import Pagination from "./Pagination";

const RecipeSearch: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleAddIngredient = (ingredient: { name: string }) => {
    setIngredients((prevIngredients) => [...prevIngredients, ingredient.name]);
  };

  return (
    <main className="flex overflow-hidden flex-col flex-1 shrink basis-0 w-full max-w-full min-w-[240px]">
      <header className="flex flex-wrap gap-3 justify-between items-start p-4 w-full">
        <div className="flex flex-col w-full max-w-[352px]">
          <h1 className="text-3xl font-bold leading-none text-stone-900 w-full">
            What's in your fridge?
          </h1>
          <p className="mt-3 text-sm text-stone-500 w-full">
            We'll find the recipes for you
          </p>
        </div>
        <SearchBar onAddIngredient={handleAddIngredient} />
      </header>
      <IngredientTags ingredients={ingredients} />
      <RecipeGrid />
      <Pagination />
    </main>
  );
};

export default RecipeSearch;
