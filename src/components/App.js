import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  return (
    <div id="main">
      <button
        id="click"
        onClick={() => {
          let para = document.createElement("P");
          para.innerText =
            "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
          para.id = "para";
          document.body.appendChild(para);
          let click = document.getElementById("click");
          click.disabled = true;
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
