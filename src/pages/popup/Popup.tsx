import "@pages/popup/Popup.css";
import withSuspense from "@src/shared/hoc/withSuspense";
import { SettingFilled, CheckCircleFilled } from '@ant-design/icons';
import { ConfigProvider, Tabs } from 'antd';
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
      <div className="App py-3 self-start">
        <Tabs 
          size="large"
          defaultActiveKey="1"
          className="w-full"
          centered={true}
          type="card"
          style={{ color: 'white'}}
        >
          <TabPane
            tab={
              <span>
                <CheckCircleFilled rev={undefined} />Todo
              </span>
            }
            key="1"
          >
            <Todo />
          </TabPane>
          <TabPane
            tab={
              <span>
                <SettingFilled rev={undefined} />Settings
              </span>
            }
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