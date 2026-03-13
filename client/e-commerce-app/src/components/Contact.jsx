import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactPage}>

      {/* HERO */}
      <section className={styles.hero}>
        <p className={styles.tagline}>GET IN TOUCH</p>
        <h1 className={styles.title}>Contact LUXE</h1>
        <p className={styles.subtitle}>
          Experience refined support tailored to you.
        </p>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* FORM */}
        <div className={styles.formCard}>
          <h2>Send a Message</h2>

          <div className={styles.inputGroup}>
            <label>FULL NAME</label>
            <input type="text" placeholder="Your Name" />
          </div>

          <div className={styles.inputGroup}>
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="your@email.com" />
          </div>

          <div className={styles.inputGroup}>
            <label>MESSAGE</label>
            <textarea placeholder="Write your message..." />
          </div>

          <button className={styles.primaryBtn}>
            SEND MESSAGE
          </button>
        </div>

        {/* INFO */}
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3>Visit Our Studio</h3>
            <p>
              Via Monte Napoleone 8<br />
              Milano, Italy
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Email</h3>
            <p>support@luxe.com</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Phone</h3>
            <p>+39 123 456 7890</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Business Hours</h3>
            <p>
              Mon – Fri: 10AM – 7PM<br />
              Saturday: 11AM – 6PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}