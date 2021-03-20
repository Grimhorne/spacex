import {useState, useEffect} from 'react';
import SiteSelectForm from 'components/SiteSelectForm';
import Launches from 'components/Launches';

const App = () => {
    const [src, setSrc] = useState([]);
    const spaceXdata = 'spacex.json';

    const getData = () => {
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
        })
        .catch((err) => {
            console.error(err)
        });
    }

    useEffect(()=>{
        if(!src.length) getData();
    });

  return (
    <div className="app">
        <SiteSelectForm data={src} />
        <Launches data={src} />
    </div>
  );
}

export default App;
