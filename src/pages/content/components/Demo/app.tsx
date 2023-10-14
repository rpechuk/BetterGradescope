import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    var r = document.querySelector(':root') as HTMLElement;
    r.style.setProperty('--tdl-color-primary', '#00FF00');
  }, []);

  return <div className="text-lime-400">content view</div>;
}
