const SiteSelectForm = (props) => {
    const sites = props.data.map((item) => {
        return item.launch_site.site_name_long;
    }).filter((val, idx, self) => {
        return self.indexOf(val) === idx;
    });

    return (
        <div>
            <label>Site Name</label>
            <select>
                <SiteSelectOption label="All sites" value="-1" />
                {
                    sites.map((item, idx) => {
                        return (<SiteSelectOption key={idx} label={item} value={idx} />);
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
