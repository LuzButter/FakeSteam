import { Layout, Menu, theme } from "antd";
import React from "react";
const { Header, Content, Footer, Sider } = Layout;

const Layout1 = ({ children, items }) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                />
            </Header>
            <Content
                style={{
                    padding: '50px 50px 0px 50px',
                }}
            >
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    )
}

export default Layout1