import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from './components/Header'
import Movies from './components/Movies'
import FavoriteList from './components/FavoriteList'
import 'antd/dist/antd.css';

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header />
      <Content style={{ margin: 10 }}>
        <Row gutter={10}>
          <Col span="12">
            <Movies />
          </Col>
          <Col span="12">
            <FavoriteList />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
