import LaunchInfoItem from 'components/LaunchInfoItem';
import rocket_icon from 'images/rocket.svg';

const LaunchInfo = (props) => {

    // <LaunchInfoItem label="site" value={props.data.launch_site.site_name} valueClass="is-light is-info" />

    const defaultContent = `A rocket soars through space on SpaceX mission ${props.data.mission_name}`;
    const infoDescription = (props.data.links.flickr_images.length > 0) ? `Enjoy a sample image from SpaceX mission ${props.data.mission_name}` : defaultContent;
    const infoMediaHandle = `@${props.data.launch_site.site_name.replace(/\s/g, '_')}`;

    return (
        <div className="card-content">
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img src={rocket_icon} alt="I'm a rocket man" />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">{props.data.rocket.rocket_name}</p>
                    <p className="subtitle is-6">{props.data.rocket.rocket_type}</p>
                </div>
            </div>

            <div className="content">
                <p>{infoDescription} <a href="#" title={props.data.launch_site.site_name}>{infoMediaHandle}</a></p>
                <div className="field is-grouped is-grouped-multiline">
                    <LaunchInfoItem label="id" value={props.data.id} valueClass="is-light is-info" />
                    <LaunchInfoItem label="year" value={props.data.launch_year} valueClass="is-light is-info" />
                </div>
                <time dateTime={props.data.launch_date_local}>{props.data.launch_date_local}</time>
            </div>
        </div>
    );
}

export default LaunchInfo;