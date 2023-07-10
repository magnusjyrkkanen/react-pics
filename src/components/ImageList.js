import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>;
    });

    if (images.length < 1) {
        return (
            <div className="image-text">Search for something and the images will appear here</div>
        );
    }
    return (
        <div className="image-list">
            <div>{renderedImages}</div>
        </div>
    );
}

export default ImageList;
