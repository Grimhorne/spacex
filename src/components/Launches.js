import LaunchHero from 'components/LaunchHero';
import LaunchInfo from 'components/LaunchInfo';
import LaunchGallery from 'components/LaunchGallery';
import {useLaunchSiteContext} from 'components/LaunchSiteContext';

const Launches = (props) => {
    const site = useLaunchSiteContext();
    return (
        <div className="launch-list">
            <h1>{site.currentSite}</h1>
            <div className="launch-item">
                <LaunchHero />
                <LaunchInfo />
                <LaunchGallery />
            </div>
            <div className="launch-item">
                <LaunchHero />
                <LaunchInfo />
                <LaunchGallery />
            </div>
            <div className="launch-item">
                <LaunchHero />
                <LaunchInfo />
                <LaunchGallery />
            </div>
        </div>
    );
}

export default Launches;
