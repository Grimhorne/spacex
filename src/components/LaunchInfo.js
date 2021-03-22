// import images
import rocket_icon from 'images/rocket.svg';
import calendar_icon from 'images/calendar.svg';
import year_icon from 'images/firework.svg';
import site_icon from 'images/search.svg';
import id_icon from 'images/biometric.svg';
import mission_id_icon from 'images/identification.svg';
import mission_icon from 'images/planetary.svg';

// import hooks and components
import LaunchInfoMedia from 'components/LaunchInfoMedia';

const LaunchInfo = (props) => {
    // render
    return (
        <div className="card-content">
            <LaunchInfoMedia icon={rocket_icon} title={`${props.data.rocket.rocket_name} (${props.data.rocket.rocket_type})`} subtitle="ROCKET" />
            <LaunchInfoMedia icon={id_icon} title={props.data.id} subtitle="LAUNCH ID" />
            <LaunchInfoMedia icon={year_icon} title={props.data.launch_year} subtitle="LAUNCH YEAR" />
            <LaunchInfoMedia icon={site_icon} title={props.data.launch_site.site_name} subtitle="LAUNCH SITE NAME" />
            <LaunchInfoMedia icon={calendar_icon} title={props.data.launch_date_local} subtitle="LAUNCH DATE LOCAL" />
            <LaunchInfoMedia icon={mission_icon} title={props.data.mission_name} subtitle="MISSION NAME" />
            <LaunchInfoMedia icon={mission_id_icon} title={props.data.mission_id.join(',') || 'Mission ID(s) unavailable'} subtitle="MISSION ID" />
        </div>
    );
}

export default LaunchInfo;