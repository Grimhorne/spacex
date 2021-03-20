import {useLaunchSiteContext} from 'components/LaunchSiteContext';

const SiteSelectForm = (props) => {
    // use content to easily share data between components
    const site = useLaunchSiteContext();

    // generate an array only with unique site values
    let siteOptions = props.data.map((item) => {
        return item.launch_site.site_name_long;
    }).filter((val, idx, self) => {
        return self.indexOf(val) === idx;
    });

    // array merge to include an 'all sites' option
    siteOptions = ['All sites', ...siteOptions];

    // on change handler for launch sites
    const handleSiteChange = (e) => {
        site.setCurrentSite(e.target.value);
    }

    return (
        <div className="site-select">
            <label>Site Name</label>
            <select onChange={handleSiteChange}>
                {
                    siteOptions.map((item, idx) => {
                        return (<SiteSelectOption key={idx} label={item} value={item} />);
                    })
                }
            </select>
        </div>
    );
}

const SiteSelectOption = (props) => {
    return (
        <option value={props.value}>{props.label}</option>
    )
}

export default SiteSelectForm;
