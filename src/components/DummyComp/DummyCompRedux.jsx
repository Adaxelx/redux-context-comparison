import React from "react";
import { useSelector } from "react-redux";

const DummyCompRedux = () => {
  const value = useSelector((state) => state.slice.dummyValue);

  return (
    <div>
      <h3>Some weird value: {value}</h3>
    </div>
  );
};

export default DummyCompRedux;
