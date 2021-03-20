import { useState } from 'react';
import LaunchSiteContext from 'components/LaunchSiteContext';

const useProvideLaunchSite = () => {
    // state getters and setters
    const [src, setSrc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentSite, setCurrentSite] = useState(null);
    const [currentLaunch, setCurrentLaunch] = useState(null);

    // on change handler
    const filterSite = (e) => {
        setCurrentSite(e.target.value);
    };

    return {
        src,
        loading,
        currentSite,
        currentLaunch,
        setCurrentSite
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
