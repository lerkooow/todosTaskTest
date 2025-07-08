import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./toolkitRedux/index";

import { App } from "./App.tsx";

import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}
