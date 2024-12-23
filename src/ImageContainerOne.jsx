import React from "react";
import Gallery from "react-grid-gallery";
import { useState, useEffect } from "react";
import "./ImageContainerOne.css";
import Lightbox from "yet-another-react-lightbox";

const ImageContainerOne = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index) => {
    setPhotoIndex(index); 
    setIsOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsOpen(false);
  };

  const handleNextImage = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % images.length); 
  };

  const handlePrevImage = () => {
    setPhotoIndex(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    ); 
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen) {
        if (e.key === "ArrowRight") {
          handleNextImage(); 
        } else if (e.key === "ArrowLeft") {
          handlePrevImage(); 
        } else if (e.key === "Escape") {
          handleCloseLightbox(); 
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Image Grid */}
      <div className="container">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="image"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {/* Full-Screen Lightbox */}
      {isOpen && (
        <div className="lightbox-fullscreen">
          <img
            src={images[photoIndex]}
            alt={`Full-Screen Image ${photoIndex + 1}`}
          />
          <div className="lightbox-close" onClick={handleCloseLightbox}>
            &times;
          </div>
          <div className="lightbox-navigation">
  <img
    src="/images/is-less-than.png"
    className="icon"
    alt="Previous"
    onClick={handlePrevImage}
  />
  <img
    src="/images/is-greater-than.png"
    className="icon"
    alt="Next"
    onClick={handleNextImage}
  />
</div>

        </div>
      )}
    </>
  );
};

export default ImageContainerOne;
