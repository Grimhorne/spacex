// import hooks and components
import { useState } from 'react';
import LaunchSiteContext from 'components/LaunchSiteContext';

const useProvideLaunchSite = () => {
    // state getters and setters
    const [currentSite, setCurrentSite] = useState(null);
    const [currentLaunch, setCurrentLaunch] = useState(null);

    // expose properties and methods accessible via context
    return {
        currentSite,
        currentLaunch,
        setCurrentSite,
        setCurrentLaunch
    };
}

const LaunchSite = ({ children }) => {
    // set context value
    const site = useProvideLaunchSite();

    // setup context provider
    return (
        <LaunchSiteContext.Provider value={site}>
            {children}
        </LaunchSiteContext.Provider>
    );
}

export default LaunchSite;
