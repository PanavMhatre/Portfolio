import {  Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import About from "./screen/About";
import Portfolio from "./screen/Portfolio";
import Blog from "./screen/Blog";
import Projects from "./screen/Projects";

function App() {
  return (
      <div className="bg-white">
        <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about/" element= {<About />}/> 
        <Route path="/portfolio/" element = {<Portfolio />}/> 
        <Route path="/blog/" element = {<Blog />}/> 
        <Route path="/projects/" element = {<Projects />}/> 
      </Routes>
      </div>
  );
}

export default App;
