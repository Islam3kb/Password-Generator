// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import { LC, NC, SC, UC } from "./data/PassChar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [passwordLen, setPasswordLen] = useState(10);
  let [fPass, setPass] = useState("");

  let createPassword = () => {
    let finalPass = "";
    let charSet = "";
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;
      for (let i = 0; i < passwordLen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPass(finalPass);
    } else {
      alert("Please select any check box");
    }
  };

  let copyPath = () => {
    navigator.clipboard.writeText(fPass);
  };

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="passwordBoxIN">
          <input type="text" readOnly value={fPass} />{" "}
          <button onClick={copyPath}>Copy</button>
        </div>
        <div className="passLength">
          <label htmlFor="">Password length</label>
          <input
            type="number"
            max={20}
            min={10}
            value={passwordLen}
            onChange={(event) => setPasswordLen(event.target.value)}
          />
        </div>

        <div className="passLength">
          <label htmlFor="">Include uppercase letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>

        <div className="passLength">
          <label htmlFor="">Include lowercase letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>
        <div className="passLength">
          <label htmlFor="">Include number</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>
        <div className="passLength">
          <label htmlFor="">Include symbols</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          />
        </div>
        <button onClick={createPassword} className="btn">
          Generate password
        </button>
      </div>
    </>
  );
}

export default App;
