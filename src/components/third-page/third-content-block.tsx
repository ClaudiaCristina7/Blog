import "./third-content-block.css";
import OceanImage from "../../assets/Ocean.jpg";

export default function ThirdPage() {
  return (
    <div className="app">
      <img src={OceanImage} alt="Ocean Image" className="ocean-image" />

      <div className="page-content">
        <span className="action-type">FASHION</span>

        <h1 className="photorealistic">
          <p>Richird Norton photorealistic</p>
          <p className="paragraph">rendering as real photos</p>
        </h1>

        <div className="description-text">
          <p className="extra-description">
            Progressively incentivize cooperative systems through technically
            sound
          </p>
          <p className="extra-description">
            functionalities. The credibly productivate seamless data.
          </p>

          <span className="under-line"></span>

          <p className="second-date">08.08.2021</p>
        </div>
      </div>
    </div>
  );
}
