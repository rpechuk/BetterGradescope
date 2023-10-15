import "@pages/popup/Popup.css";
import useStorage from "@src/shared/hooks/useStorage";
import dataStorage from "@root/src/shared/storages/dataStorage";
import ToDo from "@pages/popup/Tabs/ToDo";
import Settings from "@pages/popup/Tabs/Settings";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const Popup = () => {
  const user = useStorage(dataStorage);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Todo List',
      children: <ToDo />,
    },
    {
      key: '2',
      label: 'Settings',
      children: <Settings />,
    }
  ];

  return (
    <div className="App text-white">
      <Tabs type="card" centered={true} defaultActiveKey="1" className="w-full" items={items} />
    </div>
  );
};

export default Popup;
