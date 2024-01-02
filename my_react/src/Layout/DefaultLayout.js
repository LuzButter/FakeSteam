import { Header, Sider, Footer, Content, Layout, SiderLayout } from '../Layout/LayoutPart'

// const {Header} = Layoutpart

const DefaultLayout = ({ children,  }) => {

    return (
        <>
            <SiderLayout>
                <Sider>
                    sider children
                </Sider>
                <Content style={{padding: 0}} >
                    <Layout>
                        <Header>
                            header children
                        </Header>
                        <Content>
                            {children}
                        </Content>
                        <Footer>
                            footer children
                        </Footer>
                    </Layout>
                </Content>
            </SiderLayout>
        </>
    )
}



export default DefaultLayout