import "@pages/popup/Popup.css";
import useStorage from "@src/shared/hooks/useStorage";
import withSuspense from "@src/shared/hoc/withSuspense";
import dataStorage from "@root/src/shared/storages/dataStorage";


const Popup = () => {
  const user = useStorage(dataStorage);

  return (
    <div className="App">
      [{JSON.stringify(user)}]
    </div>
  );
};

export default Popup;
