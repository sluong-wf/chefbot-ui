import React, { useState } from "react";

const SingleSelector = ({ options, onSelectionChange, title }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (onSelectionChange) {
      onSelectionChange(option);
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      margin: "20px auto",
      width: "80%",
    },
    title: {
      margin: "0 0 10px 0",
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "1.17em",
    },
    optionsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      width: "100%",
    },
    button: {
      padding: "10px 20px",
      border: "2px solid bisque",
      borderRadius: "5px",
      backgroundColor: "white",
      color: "#333",
      fontSize: "14px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    selectedButton: {
      backgroundColor: "bisque",
      color: "black",
      border: "2px solid bisque",
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{title}</h3>
      <div style={styles.optionsContainer}>
        {options.map((option) => (
          <button
            key={option}
            style={{
              ...styles.button,
              ...(selectedOption === option ? styles.selectedButton : {}),
            }}
            onClick={() => handleSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SingleSelector;
