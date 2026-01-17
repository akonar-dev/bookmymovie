import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./components/App.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import "antd/dist/reset.css";
import { Provider } from "react-redux";
import store from "../src/redux-toolkit/store.js";
import PublicRoute from "./components/PublicRoute.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
              <PublicRoute>
                <Login />
              </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
              <PublicRoute>
                <Register />
              </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
