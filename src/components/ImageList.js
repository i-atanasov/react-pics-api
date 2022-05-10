import React from "react";
import '../css/images.css';
import ImageCard from "./ImageCard";

const ImageList = props => {
    const images = props.images.map((currentImage) => {
        return <ImageCard key={currentImage.id} image={currentImage} />
    });

    return <div className="image-list">{images}</div>;

};

export default ImageList;