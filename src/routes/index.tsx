import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';

import Services from '../pages/Services';
import MobileApps from '../pages/MobileApps';
import WebSites from '../pages/WebSites';
import Revolution from '../pages/Revolution';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Estimate from '../pages/Estimate';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/services" component={Services} />
        <Route exact path="/mobile-apps" component={MobileApps} />
        <Route exact path="/web-sites" component={WebSites} />
        <Route exact path="/revolution" component={Revolution} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/estimate" component={Estimate} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
