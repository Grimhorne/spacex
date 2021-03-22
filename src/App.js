// import application stylesheet
import 'scss/App.scss';

// import hooks and components
import {useState, useEffect} from 'react';
import LaunchList from 'components/LaunchList';
import LaunchSite from 'components/LaunchSite';
import Loading from 'components/Loading';
import SiteSelectForm from 'components/SiteSelectForm';

const App = () => {
    // state getters and setters
    const [src, setSrc] = useState([]);
    const [loading, setLoading] = useState(true);

    // retrieve data from local json
    const getData = () => {
        const spaceXdata = 'spacex.json';
        const fetchOptions = {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        fetch(spaceXdata, fetchOptions)
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                setSrc(res.data.launches);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err)
            });
    };

    useEffect(()=>{
        // this timeout is to fakeout async 2 seconds
        const seconds = 2;

        // get data only if non are loaded
        if(loading) setTimeout(getData, seconds * 1000);
    });

    // for condition rendering
    const RenderApp = () => {
        if(loading) {
            // render a loading indicator
            return (<Loading />);
        } else {
            // render the application components
            return (<>
                <SiteSelectForm data={src} />
                <LaunchList data={src} />
            </>);
        }
    };

    // render, note the entire app is subject to the LaunchSite context provider
    return (
        <LaunchSite>
            <div className="app">
                <RenderApp />
            </div>
        </LaunchSite>
    );
}

export default App;
