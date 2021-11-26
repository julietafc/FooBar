import "./App.scss";
import "./index.scss";
import "antd/dist/antd.css";
import { Tabs } from "antd";
const { TabPane } = Tabs;
function App() {
  return (
    <div className="App">
      <main>
        <h1>Welcome to FooBar</h1>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane className="TabPane" tab="Manager" key="1">
            Content for Manager
          </TabPane>
          <TabPane className="TabPane" tab="Bartenders" key="2">
            Content for Bartenders
          </TabPane>
          <TabPane className="TabPane" tab="Customers" key="3">
            Content for Customers
          </TabPane>
          <TabPane className="TabPane" tab="Order" key="4">
            Content for Order Form
          </TabPane>
        </Tabs>
      </main>
    </div>
  );
}
function callback(key) {
  console.log(key);
}
export default App;
