import "./cards.css";

import { Link } from "react-router";
import type { Data } from "../popular-topics/popular-topics";

export default function Cards({ data }: { data: Data[] }) {
  return (
    <section className="cards">
      {data.map((card) => (
        <div className="card" key={card.title}>
          <span className="card-tag">{card.tag}</span>

          <img src={card.image} alt={card.alt} className="first-image"></img>

          <br></br>
          <time>{card.time}</time>
          <h2>
            <Link to={card.link}>{card.title}</Link>
          </h2>
          <p>{card.content}</p>
        </div>
      ))}
    </section>
  );
}
