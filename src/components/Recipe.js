import React from "react";
// import PropTypes from "prop-types";
import "./Recipe.css";

const Recipe = ({ recipe }) => {
  if (!recipe || !recipe.title) {
    return <p>No recipe available. Please generate one!</p>;
  }

  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>

      <div className="recipe-section">
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-section">
        <h3>Steps:</h3>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

// // Prop type validation
// Recipe.propTypes = {
//   recipe: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
//     steps: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }),
// };

export default Recipe;
