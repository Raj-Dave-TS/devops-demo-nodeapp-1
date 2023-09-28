import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./component/Routes/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
