import React, { createContext, useState } from "react";
import "./App.css";
import Counters from "./Components/Count/Counters";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Shipment from "./Components/Shipment/Shipment";

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState("laptop");
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <p>Count Value: {category}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
      <Counters></Counters>
    </CategoryContext.Provider>
  );
}

export default App;
