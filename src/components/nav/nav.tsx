import "./nav.css";
import { Link } from "react-router";

export default function Nav() {
  return (
    <div className="main-nav">
      <nav className="nav">
        <a href="#home" className="home">
          {"Home"}
        </a>
        <a href="#about">About</a>
        <a href="#articles">Articles</a>
        <Link to="/contact-form" target="_blank">
          Contact Us
        </Link>
      </nav>
    </div>
  );
}
