import React from "react";
import styles from './About.module.css';

export default function AboutLuxe() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroTag}>Welcome to LUXE</div>
          <h1 className={styles.heroTitle}>Crafted Excellence</h1>
          <p className={styles.heroSubtitle}>
            Redefining luxury through premium craftsmanship and timeless design
          </p>
          <button className={styles.heroCta}>Explore Our Story</button>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Our Story</div>
        <p className={styles.sectionSubtitle}>From vision to reality</p>
        <div className={styles.storyContent}>
          <div className={styles.storyText}>
            <h3>A Legacy of Excellence</h3>
            <p>
              LUXE was founded with a singular vision: to create extraordinary
              experiences through meticulously crafted luxury goods. Each piece
              is a testament to our commitment to uncompromising quality and
              timeless aesthetics.
            </p>
            <p>
              We believe luxury is not merely about price, but about the story,
              craftsmanship, and passion that goes into every creation. Our
              artisans work tirelessly to ensure every detail is perfect.
            </p>
          </div>
          <div className={styles.storyVisual}>✨</div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Mission & Vision</div>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🎯</div>
            <div className={styles.cardTitle}>Our Mission</div>
            <div className={styles.cardDesc}>
              To deliver exceptional luxury products that inspire confidence and
              elevate everyday moments into extraordinary experiences.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🌟</div>
            <div className={styles.cardTitle}>Our Vision</div>
            <div className={styles.cardDesc}>
              To be the world's most trusted luxury brand, recognized for
              innovation, sustainability, and unwavering commitment to
              excellence.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>💎</div>
            <div className={styles.cardTitle}>Quality First</div>
            <div className={styles.cardDesc}>
              Every product undergoes rigorous quality control, ensuring that
              only the finest items reach our discerning clientele.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🌍</div>
            <div className={styles.cardTitle}>Sustainability</div>
            <div className={styles.cardDesc}>
              We are committed to ethical sourcing and environmentally conscious
              practices in all aspects of our operations.
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Our Journey</div>
        <p className={styles.sectionSubtitle}>Key milestones in our growth</p>
        <div className={styles.timeline}>
          <div className={styles.timelineItems}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>2010</div>
                <div className={styles.timelineText}>
                  LUXE founded with a small atelier in Milan
                </div>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>2016</div>
                <div className={styles.timelineText}>
                  Expanded to 12 boutiques across Europe
                </div>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>2023</div>
                <div className={styles.timelineText}>
                  Launched global ecommerce platform
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Leadership Team</div>
        <p className={styles.sectionSubtitle}>Visionaries driving our excellence</p>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>👔</div>
            <div className={styles.memberName}>Alessio Romano</div>
            <div className={styles.memberRole}>Founder & CEO</div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>👩‍🎨</div>
            <div className={styles.memberName}>Isabella Moretti</div>
            <div className={styles.memberRole}>Creative Director</div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>💼</div>
            <div className={styles.memberName}>Marco Conti</div>
            <div className={styles.memberRole}>COO</div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberAvatar}>🎓</div>
            <div className={styles.memberName}>Giulia Rossi</div>
            <div className={styles.memberRole}>Head of Sustainability</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Experience LUXE?</h2>
        <p className={styles.ctaText}>
          Discover our curated collection of premium products and elevate your
          lifestyle
        </p>
        <button className={styles.heroCta}>Shop Now</button>
      </section>
    </div>
  );
}