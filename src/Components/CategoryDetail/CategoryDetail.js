import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const CategoryDetail = () => {
  const category = useContext(CategoryContext);
  return (
    <div>
      <h4>This is you Category Detail.</h4>
      <h4>Selected Category: {category}</h4>
    </div>
  );
};

export default CategoryDetail;
