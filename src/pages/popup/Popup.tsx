import React from "react";
import "@pages/popup/Popup.css";
import useStorage from "@src/shared/hooks/useStorage";
import exampleThemeStorage from "@src/shared/storages/exampleThemeStorage";
import withSuspense from "@src/shared/hoc/withSuspense";
import { SettingFilled, CheckCircleFilled } from '@ant-design/icons';
import { ConfigProvider, Tabs } from 'antd';
import { ColorPicker } from 'antd';
import Settings from "./Tabs/Settings";
import Todo from "./Tabs/Todo";

const { TabPane } = Tabs;

const Popup = () => {

  return (
      <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemColor: '#white',
            itemSelectedColor: '#6e6e6e',
            itemActiveColor: 'white',
            itemHoverColor: 'white',
          },
        },
      }}
    >
      <div className="App py-3 justify-center">
        <Tabs 
          size="large"
          defaultActiveKey="1"
          className="w-full"
          centered={true}
          type="card"
          style={{ color: 'white'}}
        >
          <TabPane
            tab="Todo"
            key="1"
          >
            <Todo />
          </TabPane>
          <TabPane
            tab="Settings"
            key="2"
          >
            <Settings />
          </TabPane>
        </Tabs>
      </div>
    </ConfigProvider>
  );
};

export default withSuspense(Popup);