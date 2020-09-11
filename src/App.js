import React from 'react';
import { RecoilRoot } from 'recoil';
import { Layout, Row, Col } from 'antd';
import Header from './components/Header'
import Movies from './components/Movies'
import FavoriteList from './components/FavoriteList'
import 'antd/dist/antd.css';

const { Content } = Layout;

function App() {
  return (
    <RecoilRoot>
      <Layout>
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
    </RecoilRoot>
  );
}

export default App;
