import EditorPick from "../../components/editor-pick/editor-pick";
import HeroSection from "../../components/hero-section/hero-section";
import ContactForm from "../../components/contact-form/contact-form";
import "./contact.css";

export default function ContactPage() {
  return (
    <>
      <div className="contact-form-wrapper">
        <HeroSection />
        <ContactForm />
      </div>
      <EditorPick />
    </>
  );
}
