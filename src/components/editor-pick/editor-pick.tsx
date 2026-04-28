import "./editor pick.css";
import Mountains from "../../assets/Mountains.jpg";
import Vintage from "../../assets/Vintage-car.jpg";
import River from "../../assets/River.jpg";

export default function EditorPick({ title = "Editor's Pick" }) {
  return (
    <section className="editor-section">
      <h1 className="editor-pick">{title}</h1>

      <section className="e-cards">
        <div className="e-card">
          <span className="editor-description">FASHION</span>
          <img src={Mountains} alt="Mountains" />

          <div className="e-card-overlay">
            <time>08.08.2021</time>
            <h2>Richird Norton photorealistic rendering as real photos</h2>
            <p>
              Progressively incentivize cooperative systems through technically
              sound functionalities. Credibly productivize seamless data with
              flexible schemas.
            </p>
          </div>
        </div>
        <div className="e-card">
          <span className="editor-description">FASHION</span>

          <img src={Vintage} alt="vintage-car" />
          <div className="e-card-overlay">
            <time>08.08.2021</time>
            <h2>Richird Norton photorealistic rendering as real photos</h2>
            <p>
              Progressively incentivize cooperative systems through technically
              sound functionalities. Credibly productivize seamless data with
              flexible schemas.
            </p>
          </div>
        </div>
        <div className="e-card">
          <span className="editor-description">FASHION</span>

          <img src={River} alt="River" />

          <div className="e-card-overlay">
            <time>08.08.2021</time>
            <h2>What collectors need to know about authenticity</h2>
            <p>
              Progressively incentivize cooperative systems through technically
              sound functionalities. Credibly productivize seamless data with
              flexible schemas.
            </p>
          </div>
        </div>
        <section />{" "}
      </section>
    </section>
  );
}
