import React from 'react';
import  ReactDOM  from 'react-dom/client';
import NavBar from './component/header';
import Home from './component/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './component/About';
import Internship from './component/Internship';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
const App = () => {
  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    <Internship/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
      
    
  )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);