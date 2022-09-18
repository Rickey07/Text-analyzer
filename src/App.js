// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/Textform";
import React from "react";
import {BrowserRouter as Router ,
  Routes,
  Route
} from 'react-router-dom'


let name = "Prabadhya Upadhyay";

function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#101012';
      document.body.style.color = 'white';
      showAlert("Dark Mode Has been enabled","Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled","Success");
    }
  }
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<div><Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/><Alert alert={alert} ></Alert><TextForm heading="Enter text to analyze" showAlert={showAlert} mode={mode} toggleMode = {toggleMode}/></div>}></Route>
            <Route path="about" element={<About/>}></Route> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
