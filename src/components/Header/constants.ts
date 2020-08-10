import { routeNameToPath } from '../../routes/constants';

import {
  IRouteValueToTabItem,
  IRouteValueToMenuItem,
  IRouteValueToListItem,
} from './types';

export enum TabNames {
  home,
  services,
  revolution,
  aboutUs,
  contactUs,
}

export const routeValueToTab = [
  { urlLocation: routeNameToPath.homePage.path, label: 'Home' },
  { urlLocation: routeNameToPath.services.path, label: 'Services' },
  { urlLocation: routeNameToPath.revolution.path, label: 'Revolution' },
  { urlLocation: routeNameToPath.aboutUs.path, label: 'About Us' },
  { urlLocation: routeNameToPath.contactUs.path, label: 'Contact Us' },
] as IRouteValueToTabItem[];

export enum MenuNames {
  customSoftware,
  mobileApps,
  websites,
}

export const routeValueToMenu = [
  {
    urlLocation: routeNameToPath.customSoftware.path,
    label: 'Custom Software Development',
  },
  {
    urlLocation: routeNameToPath.mobileApps.path,
    label: 'Mobile App Development',
  },
  { urlLocation: routeNameToPath.webSites.path, label: 'Website Development' },
] as IRouteValueToMenuItem[];

export enum ListNames {
  home,
  services,
  revolution,
  aboutUs,
  contactUs,
  freeEstimate,
}

export const routeValueToList = [
  { urlLocation: routeNameToPath.homePage.path, label: 'Home' },
  { urlLocation: routeNameToPath.services.path, label: 'Services' },
  { urlLocation: routeNameToPath.revolution.path, label: 'Revolution' },
  { urlLocation: routeNameToPath.aboutUs.path, label: 'About Us' },
  { urlLocation: routeNameToPath.contactUs.path, label: 'Contact Us' },
  { urlLocation: routeNameToPath.estimate.path, label: 'Free Estimate' },
] as IRouteValueToListItem[];
