import React from "react";
import Slider from "./Slider";
import Container from "./Container";
import styles from "@/components/styles/home/hero.module.css";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Container>
      <section className={`${styles.hero}`}>
        <div className={`${styles.textSection} text-gray-700`}>
          <h1>
            One Stop Solution <span>E-Dukaan</span>{" "}
          </h1>
          <p>
            Discover the latest headphones, earphones, mobiles, tablets and
            more.
          </p>
          <p>Exclusive deals just for you!</p>
          <Link href={`/store`} className={`${styles.ctaButton}`}>Shop Now</Link>
        </div>
        <Slider />
      </section>
    </Container>
  );
};

export default HeroSection;
