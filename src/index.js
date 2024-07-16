import React from "react";
import { createRoot } from "react-dom/client";

import "./main.scss";

const App = () => <p>This is Webpack React App </p>;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
