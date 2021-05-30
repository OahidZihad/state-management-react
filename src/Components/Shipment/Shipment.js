import React from "react";

const Shipment = (props) => {
  const { count } = props;
  return (
    <div>
      <h3>This is Shipment: {count}</h3>
    </div>
  );
};

export default Shipment;
