
import LaunchHero from 'components/LaunchHero';
import LaunchInfo from 'components/LaunchInfo';
import LaunchGallery from 'components/LaunchGallery';
import LaunchArticle from 'components/LaunchArticle';

const LaunchListItem = (props) => {
    return (
        <div className="launch-item column is-one-third-tablet is-half-desktop is-half-widescreen is-half-fullhd">
        <div className="card">
            <LaunchHero images={props.data.links.flickr_images} mission={props.data.mission_name} site={props.data.launch_site.site_name} />
            <LaunchInfo data={props.data} />
            <LaunchGallery images={props.data.links.flickr_images} />
            <LaunchArticle url={props.data.links.article_link} />
        </div>
        </div>
    );
}

export default LaunchListItem;
