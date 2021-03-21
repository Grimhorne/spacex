import LaunchInfoItem from 'components/LaunchInfoItem';

const LaunchInfo = (props) => {
    let launchInfoList = [];

    launchInfoList.push({id: props.data.id, label: 'Launch Sate',      value: `${props.data.launch_date_local}` });
    launchInfoList.push({id: props.data.id, label: 'Launch Site Name', value: `${props.data.launch_site.site_name}` });
    launchInfoList.push({id: props.data.id, label: 'Launch Year',      value: `${props.data.launch_year}` });
    launchInfoList.push({id: props.data.id, label: 'Rocket',           value: `${props.data.rocket.rocket_name} (${props.data.rocket.rocket_type})` });
    launchInfoList.push({id: props.data.id, label: 'Article',          value: `${props.data.links.article_link}` });

    return (
        <div className="info-list">
            {launchInfoList.map((item, idx) => {return (<LaunchInfoItem key={idx} label={item.label} value={item.value} />)})}
        </div>
    );
}

export default LaunchInfo;
