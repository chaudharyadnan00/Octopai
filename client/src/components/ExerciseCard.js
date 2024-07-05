import React from "react";
import { useNavigate } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  const navigate = useNavigate();
  return (
    <div
      className="exercise-card"
      style={{
        backgroundImage: `url(${exercise.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "2px 2px 6px 0px #6060ff60",
        borderRadius: "10px",
        border: "2px solid #5555ff50",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "320px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "16px",
            fontSize: "20px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {exercise.name}
        </div>
        <div style={{ padding: "10px" }}>
          <button
            style={{
              width: "100%",
              padding: "16px",
              border: "2px solid #55ff55",
              borderRadius: "10px",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
              backgroundColor: "#00000060",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/position/${exercise._id}`)}
          >
            Start Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
