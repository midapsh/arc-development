import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';

import Services from '../pages/Services';
import MobileApps from '../pages/MobileApps';
import WebSites from '../pages/WebSites';
import Revolution from '../pages/Revolution';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Estimate from '../pages/Estimate';
import CustomSoftware from '../pages/CustomSoftware';

import { routeNameToPath } from './constants';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={routeNameToPath.homePage.path} component={HomePage} />

      <Route exact path={routeNameToPath.services.path} component={Services} />
      <Route
        exact
        path={routeNameToPath.mobileApps.path}
        component={MobileApps}
      />
      <Route exact path={routeNameToPath.webSites.path} component={WebSites} />
      <Route
        exact
        path={routeNameToPath.revolution.path}
        component={Revolution}
      />
      <Route exact path={routeNameToPath.aboutUs.path} component={AboutUs} />
      <Route
        exact
        path={routeNameToPath.contactUs.path}
        component={ContactUs}
      />
      <Route exact path={routeNameToPath.estimate.path} component={Estimate} />
      <Route
        exact
        path={routeNameToPath.customSoftware.path}
        component={CustomSoftware}
      />
    </Switch>
  );
};

export default Routes;
