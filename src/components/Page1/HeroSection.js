import "./HeroSection.css"; // ✅ Importing CSS file

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Event<span>Hive</span>-ing <br />
          the Best. Day. Ever.
        </h1>
        <div className="hero-stats">
          <div className="stat-box">2k+ <br /> Total Events Hosted</div>
          <div className="stat-box">100+ <br /> Total Events Live</div>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D" alt="Event Banner" />
      </div>
    </section>
  );
}
