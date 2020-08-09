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
  { urlLocation: '/', label: 'Home' },
  { urlLocation: '/services', label: 'Services' },
  { urlLocation: '/revolution', label: 'Revolution' },
  { urlLocation: '/about-us', label: 'About Us' },
  { urlLocation: '/contact-us', label: 'Contact Us' },
] as IRouteValueToTabItem[];

export enum MenuNames {
  customSoftware,
  mobileApps,
  websites,
}

export const routeValueToMenu = [
  { urlLocation: '/custom-software', label: 'Custom Software Development' },
  { urlLocation: '/mobile-apps', label: 'Mobile App Development' },
  { urlLocation: '/web-sites', label: 'Website Development' },
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
  { urlLocation: '/', label: 'Home' },
  { urlLocation: '/services', label: 'Services' },
  { urlLocation: '/revolution', label: 'Revolution' },
  { urlLocation: '/about-us', label: 'About Us' },
  { urlLocation: '/contact-us', label: 'Contact Us' },
  { urlLocation: '/estimate', label: 'Free Estimate' },
] as IRouteValueToListItem[];
