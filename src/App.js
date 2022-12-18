import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import Alert from "./components/Alert.js";
import Textform from "./components/Textform.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#061e36";
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };

  const showAlert = (msg, type) => {
    console.log("alert");
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  return (
    <Router>
      <Navbar title="Word Player" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Textform mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
