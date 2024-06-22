import './App.css';
import React from "react"
import {BrowserRouter as Router ,Route, Routes} from "react-router-dom";
import Login from './Components/pages/login';
import Signup from './Components/pages/signup';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
