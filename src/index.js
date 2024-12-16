import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const robinElement = document.getElementById("Robin");
const robin = createRoot(robinElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

robin.render(
  <StrictMode>
    <App />
  </StrictMode>
);
