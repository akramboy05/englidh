import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/loader/Loader";
const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
     <Suspense fallback={ <Loader/> }>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
