import "./topics-header.css";

export default function TopicsHeader() {
  return (
    <header className="topics-header">
      <nav className="topics-nav">
        <a href="\#all" className="all-button">
          All
        </a>
        <a href="#adventure">Adventure</a>
        <a href="#travel">Travel</a>
        <a href="#fashion">Fashion</a>
        <a href="#technology">Technology</a>
        <a href="#branding">Branding</a>
      </nav>

      <a href="#" className="view-all">
        View All
      </a>
    </header>
  );
}
