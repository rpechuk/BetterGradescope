import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    var r = document.querySelector(':root') as HTMLElement;
    r.style.setProperty('--tdl-color-primary', '#00FF00');
    console.log("content view loaded");
  }, []);

  return <div className="text-lime-400">content view 1</div>;
}
