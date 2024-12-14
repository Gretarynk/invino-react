import React from "react";
import styles from "./gallery.module.css";


interface Photo {
  id: number;
  title: string;
  src: string;
}

interface GalleryProps {
  photos: Photo[];
  onImageClick: (index: number) => void;
  currentImage?: string;
  currentTitle?:string;
  onCloseModal: () => void;
  onPrev: () => void;
  onNext: () => void;
  isModalOpen: boolean;
}

const Gallery: React.FC<GalleryProps> = ({
  photos,
  onImageClick,
  currentImage,
  currentTitle,
  onCloseModal,
  onPrev,
  onNext,
  isModalOpen,
}) => {
  return (
    <section className={styles.galleryContainer}>
      <div className={styles.galleryWrapper}>
        <h2 className={styles.titleGallery}>Gallery</h2>
        <div className={styles.gallery}>
          {photos.map((photo, index) => (
            <img
              key={photo.id}
              src={photo.src}
              alt={photo.title}
              className={styles.galleryItem}
              onClick={() => onImageClick(index)}
            />
          ))}
        </div>
        {isModalOpen && (
          <div className={styles.modal} onClick={onCloseModal}>
            <span className={styles.close}>&times;</span>
            
            <img className={styles.modalContent} src={currentImage} alt="Large View"
            onClick={(e) => {
              e.stopPropagation(); 
              onNext(); 
            }} />
            <h2 className={styles.photoTitle}>{currentTitle}</h2>
            <button className={styles.navBtn} onClick={onPrev}>
              &lt;
            </button>
            <button className={styles.navBtn} onClick={onNext}>
              &gt;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
