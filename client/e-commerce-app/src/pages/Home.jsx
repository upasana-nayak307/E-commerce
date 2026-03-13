import React from "react";
import heroImage from "../assets/hero-product.png"; // adjust path
import ProductGrid from "./productGrid";
import FeaturedSection from "./Featured";
import Footer from "../components/Footer";
import styles from './Home.module.css';

const HeroSection = () => {
  return (
    <>
      <section className={styles.heroSection}>
        {/* Background image */}
        <div className={styles.heroBackground}>
          <img
            src={heroImage}
            alt="Premium headphones on dark background"
            className={styles.heroImage}
            loading="eager"
          />
          <div className={styles.heroOverlay}></div>
        </div>

        {/* Content */}
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={`${styles.heroSubtitle} ${styles.animateFadeInUp}`}>
              New Collection 2026
            </p>
            <h1 className={`${styles.heroTitle} ${styles.animateFadeInUpDelay1}`}>
              Redefine
              <br />
              Your <span className={styles.gradientText}>Style</span>
            </h1>
            <p className={`${styles.heroDescription} ${styles.animateFadeInUpDelay2}`}>
              Discover our curated collection of premium 
              <br />
              products, designed for those who demand 
              <br />excellence.
            </p>
            <div className={`${styles.heroButtons} ${styles.animateFadeInUpDelay3}`}>
              <button className={`${styles.heroBtn} ${styles.primaryBtn}`}>Shop Now</button>
              <button className={`${styles.heroBtn} ${styles.outlineBtn}`}>Explore</button>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />
      <FeaturedSection />
      <Footer />
    </>
  );
};

export default HeroSection;