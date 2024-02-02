import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './App.css';
import AppHeader from './components/common/header';


import Home from './views/home';
import { Footer } from 'antd/es/layout/layout';
import AppFooter from './components/common/footer';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className='mainLayout'>
      <Header>
        <AppHeader />
        
      </Header> 
      <Content>
        <Home />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
