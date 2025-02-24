"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "@/components/styles/home/hero.module.css";

const productImages = [
  "https://images.pexels.com/photos/16688488/pexels-photo-16688488/free-photo-of-product-shoot-of-sennheiser-hd-201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/19832748/pexels-photo-19832748/free-photo-of-camera-lens-canon-ef-50mm-with-hood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8533587/pexels-photo-8533587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2041381/pexels-photo-2041381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2643698/pexels-photo-2643698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % productImages.length);
    }, 3000);

    return () => clearInterval(interval);   // cleanup incase of page closed/changed / browser off etc. Unmounting
  }, []);
  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {productImages.map((image, index) => {
          return (
            <Image
              className={`${styles.slide} ${
                index === currentSlide ? styles.active : ""
              }`}
              alt={`slider ${index + 1}`}
              src={image}
              key={index}
              fill
            />
          );
        })}
      </div>
    </div>
  );
}
