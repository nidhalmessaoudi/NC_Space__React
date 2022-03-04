import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

import Navbar from "./components/UI/Navbar";
import Articles from "./components/articles/Articles";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="" element={<h1>Hello from NC Space!</h1>} />
          <Route path="articles" element={<Articles />} />
          <Route
            path="login"
            element={!isLoggedIn ? <Login /> : <Navigate to="" />}
          />
          <Route
            path="signup"
            element={!isLoggedIn ? <Signup /> : <Navigate to="" />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
