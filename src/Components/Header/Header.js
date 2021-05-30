import React, { useState, useContext } from "react";
import { CategoryContext } from "../../App";

const Header = (props) => {
  const [category, setCategory] = useContext(CategoryContext);
  return (
    <div>
      <h3>This is Header: {category} </h3>
      <button onClick={() => setCategory("Laptop")}>Laptop</button>
      <button onClick={() => setCategory("Mobile")}>Mobile</button>
      <button onClick={() => setCategory("Camera")}>Camera</button>
    </div>
  );
};

export default Header;
