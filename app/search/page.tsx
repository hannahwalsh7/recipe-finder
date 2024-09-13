import React from "react";
import RecipeSearch from "../../components/RecipeSearch/RecipeSearch";
import FilterContainer from "../../components/FilterComponents/FilterContainer";
import Header from "../../components/Header/Header";

const Search = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', gap: '16px' }}>
        <FilterContainer />
        <RecipeSearch />
      </div>
    </div>
  );
};

export default Search;