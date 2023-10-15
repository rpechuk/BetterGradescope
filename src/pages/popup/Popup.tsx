import "@pages/popup/Popup.css";
import useStorage from "@src/shared/hooks/useStorage";
import dataStorage from "@root/src/shared/storages/dataStorage";

const Popup = () => {
  const user = useStorage(dataStorage);

  return (
    <div className="App">
      <p className="overflow-auto break-words">
        [{JSON.stringify(user)}]
      </p>
    </div>
  );
};

export default Popup;
