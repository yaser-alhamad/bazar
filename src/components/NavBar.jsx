import React, { useState } from "react";

const NavBar = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div className="bg-red-800" onClick={() => setCounter((old) => old + 1)}>
      {counter}
    </div>
  );
};

export default NavBar;
