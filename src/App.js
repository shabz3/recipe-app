import React, { useState, useEffect, useMemo } from "react";
import Recipe from "./Recipe";
import { useFetch } from "./useFetch";
import "./App.css";

const App = () => {
  const APP_ID = "f6d123fb";
  const APPLICATION_KEY = "74f787d72ebf9121e22a946e2672888e";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("bread");
  const url =`https://api.edamam.com/search?q=${searchQuery}&app_id=f6d123fb&app_key=74f787d72ebf9121e22a946e2672888e`;
  const { status, data } = useFetch(url);
  

  useEffect(() => {
    getRecipes()
  }, [searchQuery]);

  const getRecipes = async() => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APPLICATION_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    
  };

  const getSearch = (event) => {
    event.preventDefault();
    setSearchQuery(search);
    setSearch("");
  };

  const updateSearch = (event) => {
    //whenever input changes change the state of search
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {recipes.map((singleRecipe) => (
            <div className="recipes">
              <Recipe
                key={singleRecipe.recipe.uri}
                label={singleRecipe.recipe.label}
                image={singleRecipe.recipe.image}
                calories={singleRecipe.recipe.calories}
                ingredients={singleRecipe.recipe.ingredients}
                uri={singleRecipe.recipe.uri}
              />
            </div>
          ))}
    </div>
  );
};

export default App;
