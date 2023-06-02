import React, { useEffect, useState } from "react";
import UpperCase from "./UpperCase";

const Name = () => {
  const [name, setName] = useState("");
  const [rendeUpper, setRenderUpper] = useState(false);
  const addToStorage = () => {
    localStorage.setItem("name", JSON.stringify(name));

    setTimeout(() => {
      setRenderUpper(!rendeUpper);
    }, 2000);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={addToStorage}>Add to Storage</button>
      {rendeUpper && <UpperCase />}
    </div>
  );
};

export default Name;
