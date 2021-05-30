import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const CategoryDetail = (props) => {
  const { name } = props.product;
  return (
    <div>
      <h4>This is you Category Detail.</h4>
      <h4>Selected Product: {name}</h4>
    </div>
  );
};

export default CategoryDetail;
