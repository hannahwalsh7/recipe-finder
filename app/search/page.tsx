"use client";
import React, { useEffect, useState } from "react";
import RecipeSearch from "../../components/RecipeSearch/RecipeSearch";
import FilterContainer from "../../components/FilterComponents/FilterContainer";
import { useSearchParams } from "next/navigation";

const Search = () => {
	const [recipeList, setRecipeList] = useState(null);
	const searchParams = useSearchParams();
	const query = searchParams.get("q");
	useEffect(() => {
		const fetchRecipeInfo = async () => {
			try {
				const response = await fetch(
					`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=b2d9f538dcff4c368e1f5d9778c5a42a`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				const data = await response.json();
				console.log(data);
				setRecipeList(data.results);
			} catch (error: any) {
				console.log(error);
			}
		};
		fetchRecipeInfo();
	}, []);
	return (
		<div style={{ display: "flex", gap: "16px" }}>
			<FilterContainer />
			<RecipeSearch recipes={recipeList} />
		</div>
	);
};

export default Search;
