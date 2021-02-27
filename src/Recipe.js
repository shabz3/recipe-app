import React from "react";
import { Link } from "react-router-dom";
import style from "./recipe.module.css";

const Recipe = ({ label, image, calories, ingredients, uri }) => {
    const encoded_uri = encodeURIComponent(uri)
  return (
    <div className={style.recipe}>
      
        <h1>
        <Link to={`/${encoded_uri}`}>{label}</Link>
        </h1>
      

      <h1> {calories} </h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li> {ingredient.text} </li>
        ))}
      </ul>
      <img src={image} alt="" className={style.image} />
    </div>
  );
};

export default Recipe;
