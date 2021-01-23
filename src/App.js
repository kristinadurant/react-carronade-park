import './App.css';
import './css/style.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FloorPlans from './pages/FloorPlans';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import Neighborhood from './pages/Neighborhood';

const App = () => {
  return (
    <BrowserRouter >
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/floor-plans' component={FloorPlans} />
        <Route exact path='/amenities' component={Amenities} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/neighborhood' component={Neighborhood} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
