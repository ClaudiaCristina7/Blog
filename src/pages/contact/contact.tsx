import ContactForm from "../../components/contact-form/contact-form";
import HeroSection from "../../components/hero-section/hero-section";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SubFooter from "../../components/sub-footer/sub-footer";
import Nav from "../../components/nav/nav";
import Logo from "../../components/logo/logo";
import SocialIcons from "../../components/social-icons/social-icons";
import Search from "../../components/search/search";
import "./contact.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Stânga — Header + HeroSection */}
      <div className="contact-left">
        <Header>
          <Logo />
          <div className="header-container">
            <Nav />
            <SocialIcons />
            <Search onSubmit={(value) => console.log(value)} />
          </div>
        </Header>
        <HeroSection />
      </div>

      {/* Dreapta — Form pe alb */}
      <div className="contact-right">
        <ContactForm />
      </div>

      {/* Footer — jos pe toată lățimea */}
      <div className="contact-footer">
        <Footer />
        <SubFooter />
      </div>
    </div>
  );
}
