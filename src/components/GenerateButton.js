import React, { useState } from "react";

const GenerateButton = ({ onClick, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        button: {
            margin: "25px 0",
            padding: "12px 30px",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#fff",
            cursor: "pointer",
            outline: "none",
            backgroundColor: isHovered ? "brown" : "brown",  // Change background on hover
            border: `2px solid ${isHovered ? "brown" : "brown"}`,  // Change border on hover
            borderRadius: "5px",
            boxShadow: isHovered
                ? "0 8px 16px rgba(0, 0, 0, 0.2)"  // Stronger shadow on hover
                : "0 4px 8px rgba(0, 0, 0, 0.1)",  // Default shadow
            transition: "all 0.3s ease", // Smooth transition for all changes
            transform: isHovered ? "scale(1.05)" : "scale(1)", // Slight scaling on hover

        },
    };

    return (
        <button
            onClick={onClick}
            style={styles.button}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
        </button>
    );
};

export default GenerateButton;
