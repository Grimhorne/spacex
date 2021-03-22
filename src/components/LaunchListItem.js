// import hooks and components
import LaunchHero from 'components/LaunchHero';
import LaunchInfo from 'components/LaunchInfo';
import LaunchGallery from 'components/LaunchGallery';
import LaunchArticle from 'components/LaunchArticle';

const LaunchListItem = (props) => {
    // render
    return (
        <div className="launch-item pt-4 pb-4">
        <div className="columns">
            <div className="column">
            <div className="card is-shadowless">
                <LaunchHero images={props.data.links.flickr_images} mission={props.data.mission_name} site={props.data.launch_site.site_name} />
                <LaunchGallery images={props.data.links.flickr_images} />
            </div>
            </div>
            <div className="column">
            <div className="card is-shadowless">
                <LaunchInfo data={props.data} />
                <LaunchArticle url={props.data.links.article_link} />
            </div>
            </div>
        </div>
        </div>
    );
}

export default LaunchListItem;
