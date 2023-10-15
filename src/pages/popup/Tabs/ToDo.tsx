import "@pages/popup/Popup.css";
import useStorage from "@src/shared/hooks/useStorage";
import dataStorage from "@root/src/shared/storages/dataStorage";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const ToDo = () => {
  const user = useStorage(dataStorage);

  return (
    <div className="w-full text-white">
      <p className="overflow-auto break-words">
        {JSON.stringify(user, null, 2)}
      </p>
    </div>
  );
};

export default ToDo;
