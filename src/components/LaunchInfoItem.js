const LaunchInfoItem = (props) => {
    return (
        <div class="info-list-item">
            <span className="label">{props.label}</span> <span className="value">{props.value}</span>
        </div>
    );
}

export default LaunchInfoItem;
