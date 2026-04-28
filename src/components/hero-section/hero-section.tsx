import "./hero-section.css";
import beachImage from "../../assets/Image.svg";

export default function HeroSection({
  image = beachImage,
  author = "",
  centered = false,
  category = "ADVENTURE",
}) {
  return (
    <div className="hero-image">
      <img src={image} alt="Ocean and beach" className="beach-image" />

      <div className={`hero-content ${centered ? "second-hero-centered" : ""}`}>
        <span className="action-logo">{category}</span>
        <h1 className="richird-norton">
          Richird Norton photorealistic
          <br />
          rendering as real photos
        </h1>
        <div className="description">
          <p className="date">08.08.2021</p>
          <span className="horizontal-line"></span>

          <p className="runo-description">
            Progressively incentivize cooperative systems through technically
            sound <br />
            functionalities. The credibly productivate seamless data.
          </p>
        </div>
        <p className="author">{author}</p>
        <div className="pagination">
          <span className="first-dot"></span>
          <span className="second-dot"></span>
          <span className="third-dot"></span>
        </div>
      </div>
    </div>
  );
}
