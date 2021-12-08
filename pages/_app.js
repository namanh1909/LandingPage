import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Layout} from 'antd';
import AppHeader from '../components/header';
import 'antd/dist/antd.css';
import '../pages/app.css';
import BannerApp from '../components/banner';
import MenuApp from '../components/menu';
import CommentApp from '../components/comment';
import CarouselApp from '../components/carousel';
import FooterApp from '../components/footer';
const { Header } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader/>
    </Header>
    
    <div className="banner">
        <BannerApp/>
    </div>
    <div className="menu">
        <MenuApp />
    </div>
    <div className="comment">
      <CommentApp/>
    </div>
    <div className="carouselapp">
      <CarouselApp/>
    </div>
    <div className="footer-app">
      <FooterApp />
    </div>
    </Layout>
  );
}
export default App;
