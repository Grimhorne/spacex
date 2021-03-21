import {useState} from 'react';
import Lightbox from 'react-image-lightbox';

const LaunchGallery = (props) => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const defaultGalleryTitle = 'foo';
    const defaultGalleryDescription = 'da';
    const images = props.images;

    return images.length > 0 && (
        <div className="card-content gallery">
            <button type="button" className="button" onClick={() => setIsOpen(true)}>
                Open Launch Gallery ({images.length})
            </button>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length) }
                    imageTitle={defaultGalleryTitle}
                    imageCaption={defaultGalleryDescription}
                />
            )}
        </div>
    );
}

export default LaunchGallery;
