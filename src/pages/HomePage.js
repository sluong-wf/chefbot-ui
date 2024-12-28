import React, { useState } from 'react';
import Recipe from "../components/Recipe";
import SingleSelector from "../components/SingleSelector";
import GenerateButton from "../components/GenerateButton";
import recipeService from "../services/recipeService";
import WaggingDog from '../components/WaggingDog';
import StripedCat from '../components/StripedCat';
import ChefHat from '../components/ChefHat';

const HomePage = () => {
    const dietTypes = [
        "Vegetarian",
        "Vegan",
        "Pescatarian",
        "Keto",
        "Paleo",
        "Low-Carb",
        "Gluten-Free",
        "Dairy-Free",
        "Nut-Free",
        "Soy-Free",
    ];

    const cuisines = [
        "Italian",
        "Chinese",
        "Indian",
        "Mexican",
        "Thai",
        "Mediterranean",
        "Japanese",
        "French",
        "Middle Eastern",
        "American",
    ];

    const styles = {
        container: {
            background: "bisque",
            padding: "20px 0px",
            position: "relative",
        },
        selectionContainer: {
            background: "white",
            padding: "20px 0px",
        },
        recipeContainer: {
            background: "bisque",
            margin: "40px 0",
        },
        topLeftCorner: {
            top: "30px",
            left: "20px",
            position: "absolute",
            transform: "scale(0.8)",
            visibility: "hidden",
        },
        bottomRightCorner: {
            position: "absolute",
            bottom: "30px",
            right: "10px",
            transform: "scale(0.8)",
            transformOrigin: "bottom"
        },
        animalsContainer: {
            display: "flex",
            flexDirection: "row"
        },
    };

    const [selectedDiet, setSelectedDiet] = useState('');
    const [selectedCuisine, setSelectedCuisine] = useState('');
    const [foodsToAvoid, setFoodsToAvoid] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const requestData = {
            diet_type: [selectedDiet, selectedCuisine].join(','),
            foods_to_avoid: foodsToAvoid,
            ingredients: ingredients.split(',').map((item) => item.trim()),
        };
        try {
            const generatedRecipe = await recipeService.generateRecipe(requestData);
            setRecipe(generatedRecipe);
        } catch (err) {
            setError("Failed to generate recipe. Please try again.");
            console.error('Error fetching recipe:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.topLeftCorner}>
                <ChefHat />
            </div>
            <div style={styles.selectionContainer}>
                <h1>🍳 ChefBot: An AI-Powered Recipe Assistant</h1>
                <SingleSelector
                    options={dietTypes}
                    onSelectionChange={setSelectedDiet}
                    title="Diet Preference"
                />
                <SingleSelector
                    options={cuisines}
                    onSelectionChange={setSelectedCuisine}
                    title="Cuisine Preference"
                />
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
                <GenerateButton
                    onClick={handleSubmit}
                    text={loading ? "Generating..." : "Generate Recipe"}
                />
                <div style={styles.bottomRightCorner}>
                    <div style={styles.animalsContainer}>
                        <WaggingDog />
                        <StripedCat />
                    </div>
                </div>
            </div>
            {recipe && (
                <div style={styles.recipeContainer}>
                    <Recipe recipe={recipe} />
                </div>
            )}
        </div>
    );
}

export default HomePage;
