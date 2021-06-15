import React from 'react';
import Navbar  from './components/NavBar';
import Footer from './components/Footer';
import Main1 from './components/main/Main';
import Home from './components/Home-page/Home';
import About from './components/About/About';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Services from './components/services/Services';

function App() {
  return (
  <BrowserRouter>
      <>
        <Navbar />
          <Route path='/Services' component={Services} />
          <Route path='/About' component={About} />
          <Route path='/News' component={Main1} />
          <Route path='/News' component={Footer} />
          <Route exact path='/' component={Home} />
      </>
  </BrowserRouter>
  );
}

export default App;
