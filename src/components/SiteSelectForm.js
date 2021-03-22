// import hooks and components
import {useLaunchSiteContext} from 'components/LaunchSiteContext';
import location from 'images/location.svg';

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
    const allSites = 'All sites';
    siteOptions = [allSites, ...siteOptions];

    // on change handler for launch sites
    const handleSiteChange = (e) => {
        site.setCurrentSite((e.target.value !== allSites) ? e.target.value : null);
    }

    // render
    return (
        <section className="hero is-dark">
            <div className="hero-body">
                <div className="container">
                    <div className="field">
                        <label className="label has-text-light  ">Select a site</label>
                        <div className="control has-icons-left">
                            <div className="select is-large">
                                <select onChange={handleSiteChange}>
                                {
                                siteOptions.map((item, idx) => {
                                return (<SiteSelectOption key={idx} label={item} value={item} />);
                                })
                                }
                                </select>
                            </div>
                            <div className="icon is-small is-left p-2">
                                <img src={location} alt="Select a site"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const SiteSelectOption = (props) => {
    return (
        <option value={props.value}>{props.label}</option>
    )
}

export default SiteSelectForm;
