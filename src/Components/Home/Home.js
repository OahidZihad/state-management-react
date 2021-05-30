import React from "react";
import Categories from "../Categories/Categories";

const Home = (props) => {
  const { count } = props;
  return (
    <div>
      <h3 style={{ border: "1px solid purple" }}>This is Home: {count}</h3>
      <Categories count={count}></Categories>
    </div>
  );
};

export default Home;
