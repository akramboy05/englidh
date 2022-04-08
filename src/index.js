import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import loader from './assets/loader2.gif' 
import Loader from "./components/loader/Loader";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={Loader}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
