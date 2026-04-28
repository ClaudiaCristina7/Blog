import "./author-card.css";
import authorPicture from "../../assets/author picture.jpg";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.svg";
import pinteresticon from "../../assets/pinterest.png";
import behanceicon from "../../assets/behance.png";

export default function AuthorCard() {
  return (
    <div className="author-bar">
      <div className="author-tags">
        <span>ADVENTURE</span>
        <span>PHOTO</span>
        <span>DESIGN</span>
      </div>

      <hr className="separation-line" />

      <div className="author-info">
        <div className="author-left">
          <img src={authorPicture} alt="avatar" className="author-avatar" />
          <div>
            <p className="author-name">By Jennifer Lawrence</p>
            <p className="author-title">Thinker & Designer</p>
          </div>
        </div>

        <div className="author-social">
          <a href="#facebook">
            <img src={facebookIcon} alt="Facebook" className="facebook" />
          </a>

          <a href="#twitter">
            <img src={twitterIcon} alt="Twitter" className="twitter" />
          </a>
          <a href="#pinterest">
            <img src={pinteresticon} alt="Pinterest" className="pinterest" />
          </a>
          <a href="#behance">
            <img src={behanceicon} alt="Behance" className="behance" />
          </a>
        </div>
      </div>
    </div>
  );
}
