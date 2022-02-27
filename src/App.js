import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/UI/Navbar";
import Articles from "./components/articles/Articles";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="" element={<h1>Hello from NC Space!</h1>} />
          <Route path="articles" element={<Articles />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
