import { useState } from 'react';
import LaunchSiteContext from 'components/LaunchSiteContext';

const useProvideLaunchSite = () => {
    // state getters and setters
    const [currentSite, setCurrentSite] = useState(null);
    const [currentLaunch, setCurrentLaunch] = useState(null);

    return {
        currentSite,
        currentLaunch,
        setCurrentSite,
        setCurrentLaunch
    };
}

const LaunchSite = ({ children }) => {
    const site = useProvideLaunchSite();

    return (
        <LaunchSiteContext.Provider value={site}>
            {children}
        </LaunchSiteContext.Provider>
    );
}

export default LaunchSite;
