import React, { useState } from "react";

const Pizza = ({ pizzaPrice }) => {
  const [price, setPrice] = useState(0);

  pizzaPrice(price);

  return (
    <>
      <div>
        <div>
          <h2></h2>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </>
  );
};
export default Pizza;
