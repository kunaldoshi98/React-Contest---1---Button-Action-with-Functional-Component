import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  return (
    <div id="main">
      <button
        id="click"
        onClick={() => {
          var id = document.getElementById("para");
          id.hidden = false;
        }}
      >
        Click
      </button>
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    </div>
  );
}

export default App;
