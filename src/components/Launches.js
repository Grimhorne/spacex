import LaunchHero from 'components/LaunchHero';
import LaunchInfo from 'components/LaunchInfo';
import LaunchGallery from 'components/LaunchGallery';

const Launches = (props) => {
    return (
        <div className="launches">
            <LaunchHero />
            <LaunchInfo />
            <LaunchGallery />
        </div>
    );
}

export default Launches;
