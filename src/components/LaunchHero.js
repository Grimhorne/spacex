import rocket_placeholder from 'images/rocket_launch.png'

const LaunchHero = (props) => {
    // set the hero image caption
    const defaultDescription = 'A rocket launches into space';
    const heroDescription = (props.images.length > 0) ? `A sample image from ${props.mission} at ${props.site}` : defaultDescription;

    // set the hero image
    const heroImage = (props.images.length > 0) ? props.images[0] : rocket_placeholder;

    return (
        <div className="hero card-image">
            <figure className="image is-5by3">
                <img src={heroImage} alt={heroDescription} />
            </figure>
        </div>
    );
}

export default LaunchHero;
