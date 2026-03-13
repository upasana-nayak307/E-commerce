import "./Featured.css";

const FeaturedSection = () => {
  return (
    <section className="luxe-featured">
      <div className="featured-container">
        <div className="featured-grid">

          {/* Left Content */}
          <div className="featured-content">
            <p className="featured-label">Limited Edition</p>

            <h2 className="featured-title">
              Crafted for <br /> Perfection
            </h2>

            <p className="featured-description">
              Each piece in our collection is meticulously designed, blending
              form and function into something truly extraordinary.
            </p>

            <button className="featured-button">
              Discover More
            </button>
          </div>

          {/* Right Stats */}
          <div className="stats-grid">
            <div className="stats-column">
              <div className="stat-card">
                <p className="stat-number">50+</p>
                <p className="stat-label">Products</p>
              </div>

              <div className="stat-card">
                <p className="stat-number">12K</p>
                <p className="stat-label">Customers</p>
              </div>
            </div>

            <div className="stats-column stats-offset">
              <div className="stat-card">
                <p className="stat-number">4.9</p>
                <p className="stat-label">Rating</p>
              </div>

              <div className="stat-card">
                <p className="stat-number highlight">∞</p>
                <p className="stat-label">Possibilities</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;;