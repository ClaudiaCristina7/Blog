import "./editor pick.css";
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
interface EditorPickProps {
  title?: string;
}

export default function EditorPick({ title }: EditorPickProps) {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("https://travel-magazine-0id9.onrender.com/Editor_Pick")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err: Error) => console.log(err.message));
  }, []);

  return (
    <section className="editor-section">
      <h1 className="editor-pick">{title || "Editor's Pick"}</h1>
      <Cards data={data} />{" "}
    </section>
  );
}
