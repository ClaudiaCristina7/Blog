import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.svg";
import youtubeicon from "../../assets/youtube.png";
import pinteresticon from "../../assets/pinterest.png";
import behanceicon from "../../assets/behance.png";
import "./social-icons.css";

export default function SocialIcons() {
  return (
    <div className="social-icons-container">
      <nav className="social-icons">
        <span className="line-before"></span>

        <a href="#facebook">
          <img src={facebookIcon} alt="Facebook" className="facebook" />
        </a>

        <a href="#twitter">
          <img src={twitterIcon} alt="Twitter" className="twitter" />
        </a>

        <a href="#youtube">
          <img src={youtubeicon} alt="Youtube" className="youtube" />
        </a>
        <a href="#pinterest">
          <img src={pinteresticon} alt="Pinterest" className="pinterest" />
        </a>
        <a href="#behance">
          <img src={behanceicon} alt="Behance" className="behance" />
        </a>
        <span className="line-after"></span>
      </nav>
    </div>
  );
}
