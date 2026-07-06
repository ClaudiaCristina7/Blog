import TopicsHeader from "../topics-header/topics-header";
import TopicsTitle from "../topics-title/topics-title";
import "./popular-topics.css";
import Cards from "../cards/cards";
import { useEffect, useState } from "react";

export interface Data {
  tag: string;
  image: string;
  alt: string;
  time: string;
  title: string;
  link: string;
  content: string;
}

export default function Populartopics() {
  const [data, setData] = useState<Data[]>([]);

  const [color, setColor] = useState("red");

  useEffect(() => {
    fetch("https://travel-magazine-0id9.onrender.com/cards")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className="page-section">
      <TopicsTitle />

      <TopicsHeader />

      <Cards data={data} />
      <button
        type="button"
        onClick={() => setColor(color === "red" ? "blue" : "grey")}
        style={{ backgroundColor: color }}
      >
        change color
      </button>
    </section>
  );
}
