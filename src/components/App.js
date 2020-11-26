import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  return (
    <div id="main">
      <button
        id="click"
        onClick={() => {
          var para = document.createElement("P");
          para.innerText =
            "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
          document.body.appendChild(para);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
