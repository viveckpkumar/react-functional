import React from "react";
import Navbar from "./Components/Layout/Navbar";
import "./App.css";
import User from "./Components/Users/User";

function App() {
  return (
    <div className="App">
      <Navbar />
      <User />
    </div>
  );
}

export default App;
