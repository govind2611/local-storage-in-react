import React, { useEffect, useState } from "react";
const UpperCase = () => {
  let [value, setValue] = useState("");
  

  useEffect(() => {
    let getName = JSON.parse(localStorage.getItem("name"));
    setValue(getName);
  });

  return (
    <div>
      <h1>Value : {value.toUpperCase()}</h1>
    </div>
  );
};

export default UpperCase;
