import { createBrowserRouter } from "react-router";
import Layout from "./pages/layout/layout";
import Homepage from "./pages/homepage/homepage";
import BlogPage from "./pages/blog/blogpage";
import SecondPage from "./pages/second-page/second-page";
import ContactPage from "./pages/contact/contact";

const router = createBrowserRouter([
  {
    // no path on this parent route, just the component
    Component: Layout,

    children: [
      { index: true, Component: Homepage },
      { path: "post", Component: BlogPage },
      { path: "second-page", Component: SecondPage },
      { path: "contact-form", Component: ContactPage },
    ],
  },
]);

export default router;
