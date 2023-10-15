import { useEffect } from "react";

chrome.storage.onChanged.addListener((changed) =>{
  document.body.style.setProperty('--tdl-color-primary', changed['theme-storage-key'].newValue.color);
});

export default function App() {
  useEffect(() => {
<<<<<<< HEAD
=======
    console.log("Component has updated!"); 
>>>>>>> 31ff3a313e48fe0a16d92a36672aa59026fbdfd3
  }, []);

  return <div className="text-lime-400">content view</div>;
}
