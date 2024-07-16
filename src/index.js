import React from "react";
import { createRoot } from "react-dom/client";

import "./main.scss";

const App = () => <p>Hello</p>;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
