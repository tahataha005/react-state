import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { routes } from "../utils/routes";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page flex column">
      <h3>This is the home page</h3>
      <button
        onClick={() => {
          navigate(routes.profile);
        }}
      >
        Go to Profile
      </button>
    </div>
  );
};

export default Home;
