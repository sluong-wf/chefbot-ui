import React from "react";

const ChefHat = () => {
  const styles = {
    hatContainer: {
      position: "relative",
      width: "150px",
      height: "100px",
      margin: "0 auto",
      backgroundColor: "#fff",
      borderRadius: "50% 50% 0 0",
      border: "2px solid #ccc",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    puff: {
      position: "absolute",
      width: "60px",
      height: "60px",
      backgroundColor: "#fff",
      borderRadius: "50%",
      border: "2px solid #ccc",
      top: "-30px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    puff1: {
      left: "0",
    },
    puff2: {
      left: "45px",
    },
    puff3: {
      right: "0",
    },
    band: {
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "20px",
      backgroundColor: "#ccc",
      borderTop: "2px solid #aaa",
    },
  };

  return (
    <div style={styles.hatContainer}>
      <div style={{ ...styles.puff, ...styles.puff1 }}></div>
      <div style={{ ...styles.puff, ...styles.puff2 }}></div>
      <div style={{ ...styles.puff, ...styles.puff3 }}></div>
      <div style={styles.band}></div>
    </div>
  );
};

export default ChefHat;
