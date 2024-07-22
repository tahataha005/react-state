import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../utils/routes";

const Profile = () => {
  const navigateTo = useNavigate();

  return (
    <div className="page flex column">
      <h3>This is my profile</h3>
      <button
        onClick={() => {
          navigateTo(routes.home);
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Profile;
