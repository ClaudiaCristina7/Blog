import EditorPick from "../../components/editor-pick/editor-pick";
import HeroSection from "../../components/hero-section/hero-section";
import Populartopics from "../../components/popular-topics/popular-topics";
import ThirdContentBlock from "../../components/third-page/third-content-block";

export default function Homepage() {
  return (
    <>
      <HeroSection />

      <Populartopics />

      <ThirdContentBlock />

      <EditorPick />
    </>
  );
}
