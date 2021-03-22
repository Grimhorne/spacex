const LaunchInfoMedia = (props) => {
    // render
    return (
        <div className="media">
            <div className="media-left">
                <figure className="image is-48x48">
                    <img src={props.icon} alt={`Icon for ${props.subtitle}`} />
                </figure>
            </div>
            <div className="media-content">
                <p className="title is-4">{props.title || 'Title goes here'}</p>
                <p className="subtitle is-6">{props.subtitle || 'Subtitle goes here'}</p>
            </div>
        </div>
    );
}

export default LaunchInfoMedia;
