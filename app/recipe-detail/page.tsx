'use client';
import React, { useEffect, useState } from "react";
import IngredientList from "@/components/IngredientList/IngredientList";
import RecipeDetailsCard from "@/components/RecipeDetailsCard";
import { RecipeCardProps } from "@/components/RecipeDetailsCard/RecipeDetailsCard";
import Instructions from "@/components/Instructions/Instructions";
import NutritionalInfo from "@/components/NutritionalInfo/NutritionalInfo";
import Reviews, { ReviewsProps } from "@/components/Reviews/Reviews";
import CategoriesMenu from "@/components/CategoriesMenu/CategoriesMenu";


const recipeCard: RecipeCardProps =
{
  rating: 4.5,
  ratingCount: 120,
  title: "Spaghetti Carbonara",
  cookTime: "30 minutes",
  servings: 4,
  caloriesPerServing: 600,
  imageSrc: "https://example.com/spaghetti-carbonara.jpg"
}

const reviews: ReviewsProps = {
  overallRating: 4.5,
  totalReviews: 120,
  ratingDistribution: { 1: 10, 2: 20, 3: 30, 4: 40, 5: 20 },
  reviews: [
    {
      name: "Alice Johnson",
      date: "2023-10-01",
      rating: 5,
      comment: "Absolutely delicious! A new favorite."
    },
    {
      name: "Bob Smith",
      date: "2023-09-28",
      rating: 4,
      comment: "Great recipe, but I added some garlic for extra flavor."
    },
    {
      name: "Charlie Brown",
      date: "2023-09-15",
      rating: 3,
      comment: "It was good, but a bit too salty for my taste."
    },
    {
      name: "Diana Prince",
      date: "2023-08-30",
      rating: 5,
      comment: "My family loved it! Will definitely make again."
    },
    {
      name: "Ethan Hunt",
      date: "2023-08-20",
      rating: 4,
      comment: "Tasty and easy to prepare. Perfect for weeknights."
    }
  ]
}

const RecipeDetail = () => {
  const [recipeInfo, setRecipeInfo] = useState(null);

  const recipeId: string = '716429';

  useEffect(() => {
    const fetchRecipeInfo = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=9436712394b8418c86f89f81d8c0509b`);
        const data = await response.json();
        setRecipeInfo(data);
      } catch (error) {
        console.error("Error fetching recipe information:", error);
      }
    };

    fetchRecipeInfo();
  }, []);

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <CategoriesMenu />
      <div className='flex flex-col g-6'>
        <RecipeDetailsCard {...recipeCard} />
        <IngredientList />
        <Instructions />
        <NutritionalInfo />
        <Reviews {...reviews} />
      </div>

    </div>
  );
};

export default RecipeDetail;