import React, { useState } from 'react';
import axios from 'axios';
import Recipe from "../components/Recipe";

function HomePage() {
  const [dietType, setDietType] = useState('');
  const [foodsToAvoid, setFoodsToAvoid] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      diet_type: dietType,
      foods_to_avoid: foodsToAvoid,
      ingredients: ingredients.split(',').map((item) => item.trim()),
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/recipes/generate', data);
      setRecipe(response.data.recipe);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };

  return (
    <div>
      <h1>AI-Powered Recipe Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Diet Type:
          <input
            type="text"
            value={dietType}
            onChange={(e) => setDietType(e.target.value)}
          />
        </label>
        <br />
        <label>
          Foods to Avoid:
          <input
            type="text"
            value={foodsToAvoid}
            onChange={(e) => setFoodsToAvoid(e.target.value)}
          />
        </label>
        <br />
        <label>
          Ingredients (comma-separated):
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Generate Recipe</button>
      </form>

      {recipe && (
        <Recipe recipe={recipe} />
      )}
    </div>
  );
}

export default HomePage;
