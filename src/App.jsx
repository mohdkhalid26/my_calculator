import "./App.css";
import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import { useState, useEffect } from "react";

function App() {
  const [dis1, setDis1] = useState("");

  const onc = (e) => {
    const val = e.target.value;
    setDis1(dis1.concat(val));
  };

  const sum = () => {
    const charatF = dis1.charAt(0);
    const charatL = dis1.charAt(dis1.length - 1);
    if (
      charatF === "." ||
      charatF === "/" ||
      charatF === "+" ||
      charatF === "-" ||
      charatF === "*" ||
      charatF === "0"
    )
      return;
    if (
      charatL === "." ||
      charatL === "/" ||
      charatL === "+" ||
      charatL === "-" ||
      charatL === "*"
    )
      return;

    setDis1(eval(dis1).toString());
  };

  const allclear = () => {
    setDis1("");
  };

  return (
    <div className="maindiv">
      <div className="caldiv">
        <Display dis1={dis1} />
        <Buttons onc={onc} sum={sum} allclear={allclear} />
      </div>
    </div>
  );
}

export default App;
