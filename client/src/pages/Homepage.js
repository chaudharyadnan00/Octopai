import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ExerciseCard from "../components/ExerciseCard";

const Homepage = () => {
  const name = localStorage.getItem("name");
  const token = localStorage.getItem("token");
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    const getExercises = async (e) => {
      const apiEndpoint = "http://localhost:4000/exercise/getExercises";
      try {
        const response = await fetch(apiEndpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (response.ok) {
          setExercises([...result.data]);
          console.log("fetching exercises:", result);
        } else {
          console.error("Login failed:", result.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    getExercises();
  }, []);
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100%",
          padding: "16px 30px",
          fontSize: "20px",
          color: "#2020ff",
          fontWeight: "bold",
          boxSizing: "border-box",
        }}
      >
        Patient Name: {name}
      </div>
      <div
        className="exercise-container"
        style={{
          width: "100%",
          padding: "16px 30px",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          maxWidth: "100vw",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        {exercises &&
          exercises.map((exercise) => (
            <ExerciseCard key={exercise._id} exercise={exercise} />
          ))}
      </div>
    </div>
  );
};

export default Homepage;
