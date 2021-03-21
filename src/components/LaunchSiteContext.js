import { createContext, useContext } from 'react';

const LaunchSiteContext = createContext();

const useLaunchSiteContext = () => {
  return useContext(LaunchSiteContext);
}

export {LaunchSiteContext as default, useLaunchSiteContext};
