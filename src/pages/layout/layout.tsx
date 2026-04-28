import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Logo from "../../components/logo/logo";
import Nav from "../../components/nav/nav";
import Search from "../../components/search/search";
import SocialIcons from "../../components/social-icons/social-icons";
import SubFooter from "../../components/sub-footer/sub-footer";
import { Outlet, useLocation } from "react-router";
import "./layout.css";
import { Link } from "react-router";

export default function Layout() {
  const location = useLocation();
  return (
    <div className="app">
      <Header>
        <Logo />

        <div className="header-container">
          <Nav />

          <SocialIcons />

          <Search
            onSubmit={(value) => {
              console.log(value);
            }}
          />
        </div>
      </Header>
      <Outlet />
      <Footer />
      <SubFooter />
      {location.pathname === "/" && (
        <Link to="/second-page" target="_blank">
          <button className="next-button">Next Page</button>
        </Link>
      )}
    </div>
  );
}
