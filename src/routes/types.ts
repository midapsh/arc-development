type routesNames =
  | 'homePage'
  | 'services'
  | 'mobileApps'
  | 'webSites'
  | 'revolution'
  | 'aboutUs'
  | 'contactUs'
  | 'estimate'
  | 'customSoftware';

export type IRouteNameToPath = {
  [key in routesNames]: {
    path: string;
  };
};
