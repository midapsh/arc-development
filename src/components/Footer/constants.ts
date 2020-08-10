import { routeNameToPath } from '../../routes/constants';

import { IRouteValueToGridItem } from './types';

export enum FirtGridNames {
  home,
}

export enum SecondGridNames {
  services,
  customSoftware,
  mobileApps,
  websites,
}

export enum ThirdGridNames {
  revolution,
  vision,
  technology,
  process,
}

export enum FourthGridNames {
  aboutUs,
  history,
  team,
}

export enum FifthGridNames {
  contactUs,
}

export const routeValueToFirstGrid = [
  { urlLocation: routeNameToPath.homePage.path, label: 'Home' },
] as IRouteValueToGridItem[];

export const routeValueToSecondGrid = [
  { urlLocation: routeNameToPath.services.path, label: 'Services' },
  {
    urlLocation: routeNameToPath.customSoftware.path,
    label: 'Custom Software Development',
  },
  {
    urlLocation: routeNameToPath.mobileApps.path,
    label: 'Mobile App Development',
  },
  { urlLocation: routeNameToPath.webSites.path, label: 'Website Development' },
] as IRouteValueToGridItem[];

export const routeValueToThirdGrid = [
  { urlLocation: routeNameToPath.revolution.path, label: 'The Revolution' },
  { urlLocation: routeNameToPath.revolution.path, label: 'Vision' },
  { urlLocation: routeNameToPath.revolution.path, label: 'Technology' },
  { urlLocation: routeNameToPath.revolution.path, label: 'Process' },
] as IRouteValueToGridItem[];

export const routeValueToFourthGrid = [
  { urlLocation: routeNameToPath.aboutUs.path, label: 'About Us' },
  { urlLocation: routeNameToPath.aboutUs.path, label: 'History' },
  { urlLocation: routeNameToPath.aboutUs.path, label: 'Team' },
] as IRouteValueToGridItem[];

export const routeValueToFifthGrid = [
  { urlLocation: routeNameToPath.contactUs.path, label: 'Contact Us' },
] as IRouteValueToGridItem[];
