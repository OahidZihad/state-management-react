import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Shipment from "./Components/Shipment/Shipment";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count Value: {count}</p>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment count={count}></Shipment>
    </div>
  );
}

export default App;
