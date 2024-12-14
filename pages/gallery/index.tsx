import React, { useState } from "react";
import Gallery from "@/components/Gallery/gallery";
import { photos } from "@/components/data/photo";
import PageTemplate from "@/components/PageTemplate/pageTemplate";

const GalleryPage = () => {
  const [photoList] = useState(photos); 
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

 
  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

 
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setCurrentIndex(null);
    }
  };
  

  
  const handlePrev = () => {
    if (currentIndex !== null) {
        setCurrentIndex((currentIndex - 1 + photoList.length) % photoList.length);

    }
  };

  
  const handleNext = () => {
    if (currentIndex !== null) {
        setCurrentIndex((currentIndex + 1) % photoList.length);

    }
  };
  const currentTitle =
  currentIndex !== null ? photoList[currentIndex].title : undefined;
  return (
    <PageTemplate>
    <Gallery
      photos={photoList}
      onImageClick={handleImageClick}
      currentImage={currentIndex !== null ? photoList[currentIndex].src : undefined}
      currentTitle={currentTitle}
      onCloseModal={handleCloseModal}
      onPrev={handlePrev}
      onNext={handleNext}
      isModalOpen={currentIndex !== null}
    />
    </PageTemplate>
  );
};

export default GalleryPage;
