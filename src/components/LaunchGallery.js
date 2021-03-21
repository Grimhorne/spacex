const LaunchGallery = (props) => {
    return (
        <div className="gallery">
            {props.images.map((item, idx) => {return (<div key={idx}><img src={item} alt="d" width="100" /></div>)})}
        </div>
    );
}

export default LaunchGallery;
