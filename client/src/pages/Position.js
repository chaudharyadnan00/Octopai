import React, { useState } from "react";
import PositionCard from "../components/PositionCard";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const Position = () => {
  const userId = localStorage.getItem("userId");
  const { exerciseId } = useParams();
  const [position, setPosition] = useState([
    {
      name: "Standing",
      image:
        "https://ik.imagekit.io/02fmeo4exvw/exercise-library/large/106-1.jpg",
    },
    {
      name: "Sitting",
      image:
        "https://images.healthshots.com/healthshots/en/uploads/2023/07/07115231/chair-exercise.jpg",
    },
    {
      name: "Lying",
      image:
        "https://img.livestrong.com/640/clsd/getty/a31e1c3c04b84697845efef057873977.jpg",
    },
  ]);
  const [direction, setDirection] = useState("left");
  const sendData = async (position) => {
    console.log("user id", userId);
    const apiEndpoint = `http://localhost:4000/exercise/submitExercise/${exerciseId}`;
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ position, userId }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("setting exercises:", result);
      } else {
        console.error("api failed:", result.message);
      }
    } catch (error) {
      console.error("Error during setting pages:", error);
    }
  };
  const positionClicked = (name) => {
    console.log(name);
    console.log(exerciseId);
    console.log(direction);
    sendData(name);
  };

  return (
    <div>
      <div>
        <Navbar showCenter={false} />
      </div>
      <div
        className=""
        style={{
          position: "fixed",
          top: "15vh",
          bottom: "5vh",
          left: "10vw",
          right: "10vw",
          background: "#fff",
          border: "1px solid #dfdfdf",
          borderRadius: "10px",
          boxShadow: "2px 2px 6px 0px #00000040",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 30px",
            alignItems: "center",
            marginBottom: "36px",
          }}
        >
          <div
            style={{ fontSize: "20px", color: "#2050ff", fontWeight: "bold" }}
          >
            Select Position
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => setDirection("left")}
              style={{ cursor: "pointer" }}
            >
              Left
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: direction === "left" ? "left" : "right",
                background: "#2050ff",
                borderRadius: "60px",
                width: "60px",
                padding: "2px",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "60px",
                  width: "26px",
                  height: "26px",
                }}
              ></div>
            </div>
            <div
              onClick={() => setDirection("right")}
              style={{ cursor: "pointer" }}
            >
              Right
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {position &&
            position.map((p) => (
              <PositionCard
                position={p}
                clickHandler={() => {
                  positionClicked(p.name);
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Position;
