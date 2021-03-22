// import carousel styles
import "scss/slick.scss";
import "scss/slick-theme.scss";

// import hooks and components
import LaunchListItem from 'components/LaunchListItem';
import {useLaunchSiteContext} from 'components/LaunchSiteContext';
import Slider from "react-slick";

const LaunchList = (props) => {
    // use content to easily share data between components
    const site = useLaunchSiteContext();

    // generate an array only matching the selected site
    let launchList = props.data.filter((item, idx, self) => {
        return !site.currentSite || item.launch_site.site_name_long === site.currentSite;
    });

    // slider settings. see `https://react-slick.neostack.com/docs/api`
    const settings = {
        dots: true,
        lazyload: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // render
    return (
    <div className="launch-list container pt-4 mb-6">
        <Slider {...settings}>
        {launchList.map((item) => {return (<LaunchListItem key={item.id} data={item} />)})}
        </Slider>
    </div>
    );
}

export default LaunchList;
