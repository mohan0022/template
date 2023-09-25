import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InitialRenderComponent from "./Services/InitialRenderComponent";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { RoutePaths } from "./Routes";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createHashRouter(RoutePaths, { basename: "" });
  return (
    <div className="App">
      <Toaster />
      <RouterProvider router={router} />
      <InitialRenderComponent />
    </div>
  );
}

export default App;
