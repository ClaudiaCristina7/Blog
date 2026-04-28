import { Link } from "react-router";
import "./logo.css";

export default function Logo() {
  return (
    <Link to="/">
      <div className="logo">RUNO</div>
    </Link>
  );
}
