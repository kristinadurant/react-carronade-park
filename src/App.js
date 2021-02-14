import './style/style.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { TabContextProvider } from './context/TabContext';
import { Header, Footer } from './components';
import { Home, FloorPlans, Amenities, Gallery, Neighborhood, ScheduleTour } from './pages';

const App = () => {
  return (
    <BrowserRouter >
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />       
        <Route exact path='/carronade-park-floor-plans' component={FloorPlans} />
        <Route exact path='/carronade-park-amenities' component={Amenities} />
        <Route exact path='/carronade-park-gallery' component={Gallery} />
        <TabContextProvider>
          <Route exact path='/carronade-park-neighborhood' component={Neighborhood} />
        </TabContextProvider>
        <Route exact path='/carronade-park-schedule-tour' component={ScheduleTour} />
      </Switch>
      <Footer />     
    </BrowserRouter>
  );
}

export default App;
