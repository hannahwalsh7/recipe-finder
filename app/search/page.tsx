import React from "react";
import RecipeSearch from "../../components/RecipeSearch/RecipeSearch";
import FilterContainer from "../../components/FilterComponents/FilterContainer";

const Search = () => {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <FilterContainer />
      <RecipeSearch />
    </div>
  );
};

export default Search;