import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

function App() { 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/profile" element={<Profile /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


