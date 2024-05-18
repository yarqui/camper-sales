import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import store, { persistor } from "./redux/store";
import App from "./App";
import Spinner from "./components/Spinner/Spinner";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="flex items-center justify-center">
            <Spinner className="h-10 w-10" />
          </div>
        }
        persistor={persistor}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
