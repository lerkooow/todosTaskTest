import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store, persistor } from "./toolkitRedux/index";

import { App } from "./App.tsx";

import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}
