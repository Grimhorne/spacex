import LaunchHero from 'components/LaunchHero';
import LaunchInfo from 'components/LaunchInfo';
import LaunchGallery from 'components/LaunchGallery';

const Launches = (props) => {
    return (
        <div className="launch-list">
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
