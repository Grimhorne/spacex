const App = () => {
  return (
    <div className="app">
        <div>
            <label>Site Name</label>
            <select>
                <option>Select a site</option>
                <option>Site 1</option>
                <option>Site 2</option>
            </select>
        </div>
        <div>
            <img src="https://picsum.photos/id/537/300/200" alt="" />
            <div>Add a description of the image here</div>
        </div>
        <div>
            <p>launch date</p>
            <p>launch site name</p>
            <p>launch year</p>
            <p>rocket</p>
            <p>article</p>
        </div>
        <div>
            <div><img src="https://picsum.photos/id/537/64/64" alt="" /></div>
            <div><img src="https://picsum.photos/id/537/64/64" alt="" /></div>
            <div><img src="https://picsum.photos/id/537/64/64" alt="" /></div>
            <div><img src="https://picsum.photos/id/537/64/64" alt="" /></div>
        </div>
    </div>
  );
}

export default App;
