
import './App.css';
import Alerts from './components/Alerts.js';
// import About from './components/About.js';
import NavBar from "./components/NavBar.js"
import TextForm from './components/TextForm.js';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";




function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)

    }, 2000)

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#09112b'
      showAlert("Dark Mode has been enabled", "success")
      document.title = "TextUtils - Home(Dark Mode)"

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
      document.title = "TextUtils - Home(Light Mode)"


    }
  }
  return (
    // <Router>
    <>
      <NavBar Title="Text With Us" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert}></Alerts>
      <div className="container my-3">
        {/* <Routes> */}

        {/* <Route path="/about" element ={<About/>}/> */}

        {/* <Route path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />

        {/* </Routes> */}
      </div>
    </>
    // </Router>
  );
}

export default App;
