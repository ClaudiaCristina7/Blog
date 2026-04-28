import { createRoot } from "react-dom/client";
import "./normalize.css";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./routes.tsx";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(<RouterProvider router={router} />);
