import React from 'react';
//import { Container, Jumbotron } from 'react-bootstrap';
import Project from './components/projets';
import Profile from './components/profile';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './components/contact';
import About from './components/about';

import {
  BrowserRouter,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter basename="/react-section-2-sinancengiz">
        <div >
          <Header />
          <Route exact path="/"  component={Profile} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
    </BrowserRouter>

  );
}

export default App;
