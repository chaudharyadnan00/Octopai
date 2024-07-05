import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PositionCard = ({ position, clickHandler }) => {
  return (
    <div className="position-card" onClick={clickHandler}>
      <div>
        <img
          src={position.image}
          alt="logo"
          style={{
            minWidth: "100%",
            width: "100%",
            height: "360px",
            objectFit: "cover",
            border: "1px solid gray",
            borderRadius: "10px",
          }}
        />
        <div style={{ textAlign: "center", width: "100%", marginTop: "8px" }}>
          {position.name}
        </div>
      </div>
    </div>
  );
};

export default PositionCard;
