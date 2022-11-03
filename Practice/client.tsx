import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import MineSearch from "./MineSearch";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <MineSearch />
  </React.StrictMode>
);
