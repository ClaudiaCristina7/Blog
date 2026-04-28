import HeroSection from "../../components/hero-section/hero-section";
import BlueImage from "../../assets/bluebackground.jpg";
import "./second-page.css";
import EditorPick from "../../components/editor-pick/editor-pick";
import ArticleContent from "../../components/article-content/article-content";
import AuthorCard from "../../components/author-card/author-card";

export default function SecondPage() {
  return (
    <div className="second-page">
      <HeroSection
        image={BlueImage}
        author="By Jennifer Lawrence"
        centered={true}
        category="FASION"
      />
      <ArticleContent />
      <AuthorCard />
      <EditorPick title="Related Posts" />
    </div>
  );
}
