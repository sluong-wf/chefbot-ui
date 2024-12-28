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
      margin: "35px 20px",
    },
    optionsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      margin: "0 10px",
    },
    selectionTitle: {
      width: "200px",
      margin: "0 10px",
      textAlign: "right",
      alignContent: "center",
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
      {title && <h3 style={styles.selectionTitle}>{title}</h3>}
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
