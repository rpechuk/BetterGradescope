import { createRoot } from "react-dom/client";
import App from "@src/pages/content/components/Demo/app";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/content");

const r = document.getElementsByClassName("sidebar--content")[0] as HTMLElement;

createRoot(r).render(<App />);
