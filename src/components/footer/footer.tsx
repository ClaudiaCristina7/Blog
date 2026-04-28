import "./footer.css";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.svg";
import youtubeicon from "../../assets/youtube.png";
import pinteresticon from "../../assets/pinterest.png";
import behanceicon from "../../assets/behance.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Contact the Publisher</h4>
          <p>mike@runo.com</p>
          <p>+944 458 904 505</p>
        </div>

        <div className="footer-column">
          <h4>Explorate</h4>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Job Opportunities</a>
            </li>
            <li>
              <a href="#">Advertise</a>
            </li>
            <li>
              <a href="#">Membership</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Headquarter</h4>
          <p>391 Middleville Road,</p>
          <p>NY 1001, Sydney</p>
          <p>Australia</p>
        </div>

        <div className="footer-column">
          <h4>Connections</h4>
          <div className="social-icn">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
