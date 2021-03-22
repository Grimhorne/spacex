const LaunchArticle = (props) => {
    // identify the article domain
    const articleSite = props.url.split('/')[2];

    // define the link text
    const articleTitle = `Read on ${articleSite}`;

    // render
    return (
        <footer className="card-footer">
            <p className="card-footer-item">
                <span>
                    Read on <a href={props.url} title={articleTitle} target="_blank" rel="noreferrer">{articleSite}</a>
                </span>
            </p>
        </footer>
    );
}

export default LaunchArticle;
