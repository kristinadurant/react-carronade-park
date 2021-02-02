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
import ScheduleTour from './pages/ScheduleTour';
import { ModalContextProvider } from './context/ModalContext';
import Modal from './components/Modal';

const App = () => {
  return (
    <ModalContextProvider>
      <BrowserRouter >
        <ScrollToTop />
        <Modal /> 
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />       
          <Route exact path='/carronade-park-floor-plans' component={FloorPlans} />
          <Route exact path='/carronade-park-amenities' component={Amenities} />
          <Route exact path='/carronade-park-gallery' component={Gallery} />
          <Route exact path='/carronade-park-neighborhood' component={Neighborhood} />
          <Route exact path='/carronade-park-schedule-tour' component={ScheduleTour} />
        </Switch>
        <Footer />     
      </BrowserRouter>
    </ModalContextProvider>
  );
}

export default App;
