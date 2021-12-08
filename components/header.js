import React from "react";
import { Layout, Menu, Button} from 'antd';

const { Header } = Layout;
function AppHeader() {
  return (
    <div className="container">
      <div>
      <Header className="header">
      <div className="logo">Relationz</div>
      <Menu mode="horizontal" >
      <Menu.Item className="menu-item">Services</Menu.Item>
          <Menu.Item className="menu-item">Enterprise</Menu.Item>
          <Menu.Item className="menu-item">Pricing</Menu.Item>
          <Menu.Item className="menu-item">Login</Menu.Item>
          <Menu.Item className="menu-item">
          <Button shape="round" className="menu-item__button">
          Try it for free
          </Button>
          </Menu.Item>
      </Menu>
    </Header>
      </div>
      
    </div>
  );
}
export default AppHeader;
