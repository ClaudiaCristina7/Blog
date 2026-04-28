import TopicsHeader from "../topics-header/topics-header";
import TopicsTitle from "../topics-title/topics-title";
import "./popular-topics.css";
import Cards from "../cards/cards";
import { useEffect, useState } from "react";

export interface Data {
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
  index: number;
}

export default function Populartopics() {
  const [data, setData] = useState<Data[]>([]);

  const [color, setColor] = useState("red");

  useEffect(() => {
    async function myPromiseData() {
      return fetch("https://potterapi-fedeperin.vercel.app/en/books")
        .then((response) => response.json())
        .then((result) => {
          const cardsData = result.map((card: Data) => ({
            tag: "FANTASY",
            image: card.image,
            alt: card.title,
            time: card.date,
            title: card.title,
            link: "/post",
            content: card.description,
          }));

          setData(cardsData);
        });
    }
    myPromiseData();
  }, []);

  console.log("datele mele sunt", data);

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
