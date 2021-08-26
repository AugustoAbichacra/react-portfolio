import React, { Fragment } from "react";
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Services from './components/Services.js'
import Portfolio from './components/Portfolio.js'
import Contract from './components/Contract.js'
import Testimonials from './components/Testimonials.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contract></Contract>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
