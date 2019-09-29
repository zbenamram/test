import React from "react";
import ReactDOM from "react-dom";
import ConnectedApp from "./ConnectedApp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ConnectedApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
