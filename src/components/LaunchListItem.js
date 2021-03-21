
import LaunchHero from 'components/LaunchHero';
import LaunchInfo from 'components/LaunchInfo';
import LaunchGallery from 'components/LaunchGallery';

const LaunchListItem = (props) => {
    // console.log(props);
    return (
        <div className="launch-item">
            <LaunchHero images={props.data.links.flickr_images} mission={props.data.mission_name} site={props.data.launch_site.site_name} />
            <LaunchInfo data={props.data} />
            <LaunchGallery images={props.data.links.flickr_images} />
        </div>
    );
}

export default LaunchListItem;
