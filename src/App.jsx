import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Shader from "./Components/Shader/Shader"
import CenterMode from "./Components/Slider/Slider";
import Policy from "./Components/Policy/Policy";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={    <div>
      <Shader/>
        <Navbar/>
        <Hero/>
        <About/>
        <CenterMode/>
        <Contact/>
        <Footer/>
    </div>}/>
    <Route path="/policy" element={<Policy/>}/>
    </Routes>
    </Router>

  )
}

export default App;
