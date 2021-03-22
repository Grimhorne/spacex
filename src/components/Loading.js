const Loading = () => {
    return (
        <section className="hero is-dark is-fullheight">
        <div className="hero-body">
        <div className="container has-text-centered">
        <p className="title">
        Loading...
        </p>
        <progress className="progress is-primary" max="100">15%</progress>
        </div>
        </div>
        </section>        
    );
}

export default Loading;
