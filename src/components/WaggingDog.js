import React from "react";

const WaggingDog = () => {
  const styles = {
    body: {
      display: "flex",
      alignItems: "end",
      margin: "0 5px",
    },
    dog: {
      width: "150px",
      height: "100px",
      backgroundColor: "#e0d0b0",
      borderRadius: "5px",
      position: "relative",
      animation: "wag 1s ease-in-out infinite",
    },
    ear: {
      position: "absolute",
      width: "35px",
      height: "50px",
      backgroundColor: "#d0b090",
      borderRadius: "50%",
      top: "-25px",
      animation: "ear-flap 1s ease-in-out infinite",
    },
    leftEar: {
      left: "10px",
      transform: "rotate(-20deg)",
    },
    rightEar: {
      right: "10px",
      transform: "rotate(20deg)",
    },
    tail: {
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "20px",
      height: "50px",
      backgroundColor: "#d0b090",
      borderRadius: "5px",
      animation: "tail-wag 1s ease-in-out infinite",
    },
    keyframes: `
      @keyframes wag {
        0% { transform: translateX(0); }
        50% { transform: translateX(10px); }
        100% { transform: translateX(0); }
      }
      @keyframes tail-wag {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(30deg); }
        100% { transform: rotate(0deg); }
      }
      @keyframes ear-flap {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(-10deg); }
        100% { transform: rotate(0deg); }
      }
    `,
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <div style={styles.body}>
        <div style={styles.dog}>
          <div style={{ ...styles.ear, ...styles.leftEar }}></div>
          <div style={{ ...styles.ear, ...styles.rightEar }}></div>
          <div style={styles.tail}></div>
        </div>
      </div>
    </>
  );
};

export default WaggingDog;
