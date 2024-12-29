import React, { useState, useEffect, useRef } from 'react';

const Recipe = ({ recipe }) => {
    const styles = {
        container: {
            padding: "20px 40px",
            borderRadius: "18px",
            maxWidth: "800px",
            margin: "20px auto",
            backgroundColor: "#f9f9f9",
            textAlign: "left",
        },
        title: {
            fontSize: "32px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "15px",
        },
        sectionTitle: {
            fontSize: "24px",
            fontWeight: "bold",
            color: "brown",
            margin: "20px 0",
        },
        list: {
            paddingLeft: "20px",
            margin: "15px 0",
        },
        listItem: {
            margin: "15px 0",
            color: "#444",
            padding: "0 10px",
        },
        divider: {
            height: "1px",
            backgroundColor: "#ccc",
            margin: "30px 0",
            width: "100%"
        },
    };

    const [displayedIngredients, setDisplayedIngredients] = useState([]);
    const [displayedSteps, setDisplayedSteps] = useState([]);
    const [ingredientsRendered, setIngredientsRendered] = useState(false);
    const [stepsRendered, setStepsRendered] = useState(false);
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            const lastItem = listRef.current.lastElementChild;
            if (lastItem) {
                lastItem.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [displayedIngredients, displayedSteps]);

    useEffect(() => {
        if (!ingredientsRendered) {
            let ingredientIndex = 0;

            const renderIngredients = setInterval(() => {
                if (ingredientIndex < recipe.ingredients.length - 1) {
                    setDisplayedIngredients((prev) => [...prev, recipe.ingredients[ingredientIndex]]);
                    ingredientIndex++;
                } else {
                    clearInterval(renderIngredients);
                    setIngredientsRendered(true);
                }
            }, 50);

            return () => clearInterval(renderIngredients);
        }
    }, [ingredientsRendered]);

    useEffect(() => {
        if (!stepsRendered && ingredientsRendered) {
            let stepIndex = 0;

            const renderSteps = setInterval(() => {
                if (stepIndex < recipe.steps.length - 1) {
                    setDisplayedSteps((prev) => [...prev, recipe.steps[stepIndex]]);
                    stepIndex++;
                } else {
                    setStepsRendered(true);
                    clearInterval(renderSteps);
                }
            }, 70);

            return () => clearInterval(renderSteps);
        }
    }, [stepsRendered, ingredientsRendered]);

    useEffect(() => {
        if (recipe) {
            setDisplayedIngredients([]);
            setDisplayedSteps([]);
            setIngredientsRendered(false);
            setStepsRendered(false);
        }
    }, [recipe]);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>{recipe.title}</h2>
            <div>
                <div style={styles.divider}></div>
                <h3 style={styles.sectionTitle}>Ingredients:</h3>
                <ul style={styles.list} ref={listRef}>
                    {displayedIngredients.map((ingredient, index) => (
                        <li key={index} style={styles.listItem}>
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>
            {ingredientsRendered &&
                <div>
                    <div style={styles.divider}></div>
                    <h3 style={styles.sectionTitle}>Instructions:</h3>
                    <ol style={styles.list} ref={listRef}>
                        {displayedSteps.map((step, index) => (
                            <li key={index} style={styles.listItem}>
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>
            }
        </div>
    );
};

export default Recipe;
