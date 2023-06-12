import "./App.css";
import React from "react";

function Buttons({ onc, sum, allclear, clear }) {
  return (
    <div className="butdiv">
      <input
        type="button"
        value="AC"
        onClick={allclear}
        className="btn ac col"
      />
      <input type="button" onClick={clear} value="C" className="btn col" />

      <input type="button" value="/" onClick={onc} className="btn col" />
      <input type="button" onClick={onc} value="7" className="btn" />
      <input type="button" onClick={onc} value="8" className="btn" />
      <input type="button" onClick={onc} value="9" className="btn" />
      <input type="button" onClick={onc} value="*" className="btn col" />
      <input type="button" onClick={onc} value="4" className="btn" />
      <input type="button" onClick={onc} value="5" className="btn" />
      <input type="button" onClick={onc} value="6" className="btn" />
      <input type="button" onClick={onc} value="-" className="btn col" />
      <input type="button" onClick={onc} value="1" className="btn" />
      <input type="button" onClick={onc} value="2" className="btn" />
      <input type="button" onClick={onc} value="3" className="btn" />
      <input type="button" onClick={onc} value="+" className="btn col" />
      <input type="button" onClick={onc} value="0" className="btn" />
      <input type="button" onClick={onc} value="." className="btn" />
      <input type="button" value="=" onClick={sum} className="btn equal col" />
    </div>
  );
}

export default Buttons;
