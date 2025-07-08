import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./toolkitRedux/index";

import { App } from "./App.tsx";

import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}
