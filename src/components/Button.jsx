import React from "react";
import { useHistory } from "react-router-dom";

const Button = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/pizza");
  };

  return (
    <div>
      <button id="order-button" onClick={handleButtonClick}>
        ACIKTIM
      </button>
    </div>
  );
};

export default Button;
