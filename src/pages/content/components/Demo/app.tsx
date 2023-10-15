import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("Component has updated!"); 
  }, []);

  return <div className="text-lime-400">content view</div>;
}
