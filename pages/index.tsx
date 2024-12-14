import React, { useState, useEffect } from "react";
import PageTemplate from "@/components/PageTemplate/pageTemplate";
import Slide from "@/components/Slide/slide";

const MainPage = () => {
    
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("Current Index:", currentIndex);
  const slides = [
    { id: "slider1", src: "/invino1.jpg", alt: "bar photo" },
    { id: "slider2", src: "/ojo1.jpg", alt: "bar photo" },
    { id: "slider3", src: "/ojo3.jpg", alt: "bar photo" },
    { id: "slider4", src: "/red1.jpg", alt: "bar photo" },
    { id: "slider5", src: "/red2.jpg", alt: "bar photo" },
    { id: "slider6", src: "/food3.jpg", alt: "bar photo" },
  ];

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval); // Cleanup interval
  }, [slides.length]);

  return (
    <PageTemplate>
      <Slide slides={slides} currentIndex={currentIndex} />
    </PageTemplate>
  );
};

export default MainPage;
