import React, { useState, useEffect, useRef } from 'react';
import Recipe from "../components/Recipe";
import SingleSelector from "../components/SingleSelector";
import GenerateButton from "../components/GenerateButton";
import TagInput from "../components/TagInput";
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
        pageContainer: {
            background: "bisque",
            minHeight: "100vh",
            position: "relative",
        },
        container: {
            background: "bisque",
            padding: "20px 0px",
        },
        selectionContainer: {
            background: "white",
            padding: "20px 0px",
            position: "relative",
        },
        recipeContainer: {
            background: "bisque",
            margin: "60px 0",
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
            bottom: "15px",
            right: "10px",
            transform: "scale(0.8)",
            transformOrigin: "bottom"
        },
        animalsContainer: {
            display: "flex",
            flexDirection: "row"
        },
        buttonsContainer: {
            display: "flex",
            justifyContent: "center",
            marginTop: "20px"
        },
        randomButton: {
            background: "bisque",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold"
        },
        title: {
            marginBottom: "40px",
            fontSize: "2em",
            color: "#333"
        }
    };

    const [selectedDiet, setSelectedDiet] = useState('');
    const [selectedCuisine, setSelectedCuisine] = useState('');
    const [foodsToAvoid, setFoodsToAvoid] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRandomRecipe = async () => {
        setLoading(true);
        setError("");
        
        // Randomly select diet and cuisine
        const randomDiet = dietTypes[Math.floor(Math.random() * dietTypes.length)];
        const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
        
        // Update the state with random selections
        setSelectedDiet(randomDiet);
        setSelectedCuisine(randomCuisine);
        
        // Clear other inputs for truly random generation
        setFoodsToAvoid([]);
        setIngredients([]);
        
        const requestData = {
            diet_type: [randomDiet, randomCuisine].join(','),
            foods_to_avoid: '',
            ingredients: [],
        };
        
        try {
            const generatedRecipe = await recipeService.generateRecipe(requestData);
            setRecipe(generatedRecipe);
        } catch (err) {
            setError("Failed to generate random recipe. Please try again.");
            console.error('Error fetching recipe:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const requestData = {
            diet_type: [selectedDiet, selectedCuisine].join(','),
            foods_to_avoid: foodsToAvoid.join(','),
            ingredients: ingredients,
        };
        try {
            const generatedRecipe = await recipeService.generateRecipe(requestData);
            setRecipe(generatedRecipe);
        } catch (err) {
            setError("Failed to generate recipe. Please try again.");
            console.error('Error fetching recipe:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.container}>
                <div style={styles.topLeftCorner}>
                    <ChefHat />
                </div>
                <div style={styles.selectionContainer}>
                    <h1 style={styles.title}>🍳 ChefBot: An AI-Powered Recipe Assistant</h1>
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
                    <TagInput
                        title="Foods to Avoid"
                        value={foodsToAvoid}
                        onChange={setFoodsToAvoid}
                    />
                    <TagInput
                        title="Ingredients"
                        value={ingredients}
                        onChange={setIngredients}
                    />
                    <div style={styles.buttonsContainer}>
                        <GenerateButton
                            onClick={handleSubmit}
                            text="Generate Recipe"
                            disabled={loading}
                        />
                    </div>
                </div>
                {recipe && (
                    <div style={styles.recipeContainer}>
                        <Recipe recipe={recipe} />
                    </div>
                )}
            </div>
            <div style={styles.bottomRightCorner}>
                <div style={styles.animalsContainer}>
                    <WaggingDog />
                    <StripedCat />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
