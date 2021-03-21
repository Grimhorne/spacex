const LaunchArticle = (props) => {
    const articleSite = props.url.split('/')[2];
    const articleTitle = `Read on ${articleSite}`;
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
