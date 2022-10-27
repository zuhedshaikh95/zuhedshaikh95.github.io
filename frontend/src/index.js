import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const DOMroot = document.getElementById("root");
const root = ReactDOM.createRoot(DOMroot);

root.render(<App />);