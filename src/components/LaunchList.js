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
            <section className="hero is-primary">
              <div className="hero-body">
                <p className="title">
                  {site.currentSite || 'All Sites'}
                </p>
              </div>
            </section>
            <section className="section columns is-multiline">
            {launchList.map((item) => {return (<LaunchListItem key={item.id} data={item} />)})}
            </section>
        </div>
    );
}

export default LaunchList;
