import "./App.css";
import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import { useState, useEffect } from "react";

function App() {
  function getNum() {
    const numlist = localStorage.getItem("myNum");
    if (numlist) {
      return JSON.parse(numlist);
    } else {
      return "";
    }
  }

  const [dis1, setDis1] = useState(getNum());
  // const [dis2, setDis2] = useState(getNum());

  const onc = (e) => {
    const val = e.target.value;
    setDis1(dis1.concat(val));
    // setDis2([...dis2, val]);
    localStorage.setItem("myNum", JSON.stringify(dis1));
  };
  useEffect(() => {
    localStorage.setItem("myNum", JSON.stringify(dis1));
  }, [dis1]);
  const sum = () => {
    const charatF = dis1.charAt(0);
    const charatL = dis1.charAt(dis1.length - 1);
    if (
      charatF === "." ||
      charatF === "/" ||
      charatF === "+" ||
      charatF === "-" ||
      charatF === "*"
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
    if (dis1 === "") return;
    setDis1(eval(dis1).toString());
    // setDis2(eval(dis1).toString());
    // setDis1("");
  };

  const clear = () => {
    setDis1(dis1.substring(dis1.length - 1, dis1.lastIndexOf(" ")));
    // if (dis2.length > 2) {
    // setDis2(dis2.splice(dis2.length - 1, 1));
    // } else {
    // setDis2([]);
    // }
  };

  const allclear = () => {
    localStorage.clear();
    setDis1("");
    // setDis2([]);
  };

  // useEffect(() => {

  // }, onc);

  return (
    <div className="maindiv">
      <h1>
        {" "}
        <u> MY CALCULATOR </u>{" "}
      </h1>
      <div className="caldiv">
        <Display dis1={dis1} />
        <Buttons onc={onc} clear={clear} sum={sum} allclear={allclear} />
      </div>
    </div>
  );
}

export default App;
