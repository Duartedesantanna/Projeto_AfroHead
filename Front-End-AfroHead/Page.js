import { Layout } from "antd";

import logo from '../assets/image/logo.png'

import TopMenu from './Menu'

const { Header, Footer, Content } = Layout;

const Page = ({ children, style }) => (
  <Layout className="layout" style={style}>
    <Header>
      <TopMenu />
    </Header>
    <Content style={{ padding: '20px 50px' }}>
      { children }
    </Content>
    <Footer style={{ textAlign: 'center' }}>Afro Head ©2021 Created by Ant UED</Footer>
  </Layout>
);

export default Page;