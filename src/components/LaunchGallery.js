// import lightbox styles
import 'react-image-lightbox/style.css';

// import hooks and components
import {useState} from 'react';
import Lightbox from 'react-image-lightbox';


const LaunchGallery = (props) => {
    // state getter and setters
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    // render only if images are found
    return props.images.length > 0 && (
        <footer className="card-footer gallery">
            <p className="card-footer-item">
                <span>
                    <a onClick={() => {setIsOpen(true)}}>Open Launch Gallery ({props.images.length})</a>
                </span>
            </p>
            {isOpen && (
                <Lightbox
                    mainSrc={props.images[photoIndex]}
                    nextSrc={props.images[(photoIndex + 1) % props.images.length]}
                    prevSrc={props.images[(photoIndex + props.images.length - 1) % props.images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + props.images.length - 1) % props.images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % props.images.length) }
                />
            )}
        </footer>
    );
}

export default LaunchGallery;
