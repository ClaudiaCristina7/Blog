import "./cards.css";
import firstimage from "../../assets/firstimage.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import { Link } from "react-router";
import type { Data } from "../popular-topics/popular-topics";
import { useState } from "react";

export default function Cards() {
  const [cards] = useState<Data[]>([
    {
      tag: "ADVENTURE",
      image: firstimage,
      alt: "Dream-Destination",
      time: "08.08.2021",
      title: "Dream destinations to visit this year in Paris",
      link: "/post",
      content: "Progressively incentivize cooperative systems...",
    },
    {
      tag: "TRAVEL",
      image: image2,
      alt: "Europe-photos",
      time: "08.08.2021",
      title: "Breathtaking first-person photos around Europe",
      link: "/post",
      content: "Progressively incentivize cooperative systems...",
    },
    {
      tag: "TECHNOLOGY",
      image: image3,
      alt: "Europe-photos",
      time: "08.08.2021",
      title: "What collectors need to know about authenticity",
      link: "/post",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivize seamless data with flexible schemas.",
    },
    {
      tag: "FASHION",
      image: image4,
      alt: "Europe-photos",
      time: "08.08.2021",
      title: "Instagram artists with great photography skills",
      link: "/post",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivize seamless data with flexible schemas.",
    },
    {
      tag: "ADVENTURE",
      image: image5,
      alt: "Europe-photos",
      time: "08.08.2021",
      title: "Thins to know before visiting Cave in Germany",
      link: "/post",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivize seamless data with flexible schemas.",
    },
    {
      tag: "FASHION",
      image: image6,
      alt: "Europe-photos",
      title: "Nina Smith vibrant work collabwith Nike Dunk",
      link: "/post",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivize seamless data with flexible schemas.",
    },
    {
      tag: "TECHNOLOGY",
      image: image7,
      alt: "Europe-photos",
      time: "08.08.2021",
      title: "Richard Norton photorealisticrendering as real photos",
      link: "/post",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivize seamless data with flexible schemas.",
    },
    {
      tag: "FASHION",
      image: image8,
      alt: "Europe-photos",
      time: "08.08.2021",
      title: "25 quality collectors toys inspired by famous films",
      link: "/post",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivize seamless data with flexible schemas.",
    },
  ]);

  return (
    <section className="cards">
      {cards.map((card) => (
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
