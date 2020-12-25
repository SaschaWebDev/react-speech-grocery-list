import React from "react";

const ShoppingCardItem = (props) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255, 0.1)",
        padding: "3%",
        borderRadius: "0.375rem",
        position: "relative",
        zIndex: "2",
        backgroundFilter: "blur(40px)",
        border: "solid 2px transparent",
        backgroundClip: "padding-box",
        boxShadow: "10px 10px 10px rgba(46,54,68,0.03)",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p style={{ marginLeft: "5%" }}>{props.name}</p>
      <p style={{ marginRight: "5%" }}>{props.price}</p>
    </div>
  );
};

export default ShoppingCardItem;
