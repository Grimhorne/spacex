// import hooks and components
import { createContext, useContext } from 'react';

// define app context
const LaunchSiteContext = createContext();

// define hook to use context
const useLaunchSiteContext = () => {
  return useContext(LaunchSiteContext);
}

export {LaunchSiteContext as default, useLaunchSiteContext};
