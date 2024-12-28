import React, { useState } from "react";

const MultiSelector = ({ options, onSelectionChange, title }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggle = (option) => {
    setSelectedOptions((prev) => {
      const isSelected = prev.includes(option);
      const updatedSelection = isSelected
        ? prev.filter((o) => o !== option)
        : [...prev, option];
      if (onSelectionChange) onSelectionChange(updatedSelection);
      return updatedSelection;
    });
  };

  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      margin: "10px 0",
    },
    button: {
      padding: "10px 20px",
      border: "2px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "white",
      color: "#333",
      fontSize: "14px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    selectedButton: {
      backgroundColor: "#28a745",
      borderColor: "#28a745",
      border: "2px solid #28a745",
    },
  };

  return (
    <div>
      {title && <h3>{title}</h3>}
      <div style={styles.container}>
        {options.map((option) => (
          <button
            key={option}
            style={{
              ...styles.button,
              ...(selectedOptions.includes(option) ? styles.selectedButton : {}),
            }}
            onClick={() => handleToggle(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultiSelector;
