import { useEffect } from "react";

chrome.storage.onChanged.addListener((changed) =>{
  document.body.style.setProperty('--tdl-color-primary', changed['theme-storage-key'].newValue.color);
});

export default function App() {
  useEffect(() => {
  }, []);

  return <div className="text-lime-400">content view</div>;
}
