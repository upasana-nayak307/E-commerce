import "./Announcement.css";
const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-wrapper">
        <div className="announcement-content">
          <span>✦ New Collection 2026 — Now Available</span>
          <span>✦ Free Shipping on Orders Over $150</span>
          <span>✦ Limited Edition Drop — While Supplies Last</span>
          <span>✦ New Collection 2026 — Now Available</span>
          <span>✦ Free Shipping on Orders Over $150</span>
        </div>
      </div>
      <div className="shimmer"></div>
    </div>
  );
};

export default AnnouncementBar;