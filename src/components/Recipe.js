import React from "react";

const Recipe = ({ recipe }) => {
    if (!recipe) {
        return null;
    }

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

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>{recipe.title}</h2>
            <div>
                <div style={styles.divider}></div>
                <h3 style={styles.sectionTitle}>Ingredients:</h3>
                <ul style={styles.list}>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} style={styles.listItem}>
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div style={styles.divider}></div>
                <h3 style={styles.sectionTitle}>Instructions:</h3>
                <ol style={styles.list}>
                    {recipe.steps.map((step, index) => (
                        <li key={index} style={styles.listItem}>
                            {step}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Recipe;
