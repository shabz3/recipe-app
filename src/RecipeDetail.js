import React, { useState, useEffect } from "react";
import "./App.css";

const RecipeDetail = ({ match }) => {
  const APP_ID = "f6d123fb";
  const APPLICATION_KEY = "74f787d72ebf9121e22a946e2672888e";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("bread");

  const url = searchQuery && `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APPLICATION_KEY}&r=${match.params.id}`


  useEffect(() => {
    getRecipes();
  }, [searchQuery]);

  const getRecipes = async () => {

    // const response = await fetch(
    //   `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APPLICATION_KEY}&r=${match.params.id}`
    // );
    // const data = await response.json();
    // setRecipes(data);
    // console.log(data);
  };
  return (
    <div>
      
        {/* {recipes.map((singleRecipe) => (
          <h1>{singleRecipe.label}</h1>
        ))} */}


        <div>
        </div>
      
    </div>
    
  );
};

export default RecipeDetail;
