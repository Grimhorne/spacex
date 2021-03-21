const LaunchInfoItem = (props) => {
    return (
        <div className="info-list-item control">
            <div className="tags has-addons">
                <span className="tag is-dark">{props.label}</span>
                <span className={`tag ${props.valueClass}`}>{props.value}</span>
            </div>
        </div>
    );
}

export default LaunchInfoItem;
