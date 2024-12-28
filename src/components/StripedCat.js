import React from "react";

const StripedCat = () => {
  const styles = {
    body: {
      display: "flex",
      alignItems: "end",
      margin: "0 5px",
    },
    cat: {
      width: "120px",
      height: "80px",
      backgroundColor: "#808080",
      borderRadius: "5px",
      position: "relative",
      animation: "wag 1s ease-in-out infinite",
    },
    ear: {
      position: "absolute",
      width: "25px",
      height: "40px",
      backgroundColor: "#696969",
      borderRadius: "50%",
      top: "-20px",
      zIndex: -1,
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
      left: "80%",
      transform: "translateX(-50%)",
      width: "15px",
      height: "40px",
      backgroundColor: "#696969",
      borderRadius: "5px",
      animation: "tail-wag 1s ease-in-out infinite",
    },
    stripe: {
      position: "absolute",
      height: "8px",
      backgroundColor: "#585858",
      borderRadius: "5px",
    },
    bodyStripe1: {
      width: "40px",
      top: "15px",
      left: "15px",
    },
    bodyStripe2: {
      width: "50px",
      top: "40px",
      left: "10px",
    },
    earStripe: {
      width: "10px",
      height: "4px",
      top: "8px",
      left: "6px",
      backgroundColor: "#404040",
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
    `,
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <div style={styles.body}>
        <div style={styles.cat}>
          {/* Body Stripes */}
          <div style={{ ...styles.stripe, ...styles.bodyStripe1 }}></div>
          <div style={{ ...styles.stripe, ...styles.bodyStripe2 }}></div>
          {/* Ears */}
          <div style={{ ...styles.ear, ...styles.leftEar }}>
            <div style={{ ...styles.stripe, ...styles.earStripe }}></div>
          </div>
          <div style={{ ...styles.ear, ...styles.rightEar }}>
            <div style={{ ...styles.stripe, ...styles.earStripe }}></div>
          </div>
          {/* Tail */}
          <div style={styles.tail}></div>
        </div>
      </div>
    </>
  );
};

export default StripedCat;
