import LaunchListItem from 'components/LaunchListItem';
import {useLaunchSiteContext} from 'components/LaunchSiteContext';

const LaunchList = (props) => {
    // use content to easily share data between components
    const site = useLaunchSiteContext();

    // generate an array only matching the selected site
    let launchList = props.data.filter((item, idx, self) => {
        return !site.currentSite || item.launch_site.site_name_long === site.currentSite;
    });

    return (
        <div className="launch-list">
            <h1>{site.currentSite || 'All Sites'}</h1>
            {launchList.map((item) => {return (<LaunchListItem data={item} />)})}
        </div>
    );
}

export default LaunchList;
