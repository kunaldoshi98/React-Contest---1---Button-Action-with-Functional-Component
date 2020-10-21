import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  function handleclick() {
    var id = document.getElementById("para");
    id.hidden = false;
  }
  return (
    <div id="main">
      <button id="click" onClick={handleclick}>
        Click
      </button>
      <p id="para" hidden>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    </div>
  );
}

export default App;
