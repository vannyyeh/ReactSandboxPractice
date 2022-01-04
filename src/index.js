//Create a react app from scratch.

import React from "react";
import ReactDOM from "react-dom";

//ReactDOM.render(What to SharedWorker, Where to show it)

//It should display a h1 heading.
//ReactDOM.render(<h1>My Fav Foods</h1>, document.getElementById("root"));

//It should display an unordered list (bullet points).
ReactDOM.render(
  <div>
    <h1>My Fav Drink</h1>
    <ul>
      <li>Fruit Tea</li>
      <li>Bubble Tea</li>
      <li>Earl Grey</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//It should contain 3 list elements.
