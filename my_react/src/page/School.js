import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { Button, Col, Row, Layout, Space, Affix, Tabs } from "antd";
import React from "react";
import News from '../component/News'
import PhotoBlock from '../component/PhotoBlock'
import PhotoCarousel from '../component/PhotoCarousel'

const { Header, Content, Footer } = Layout;

const App = () => {

    const item = [
        {
            key: '1',
            src: 'url(https://i.pinimg.com/564x/93/55/ff/9355ffa0f1aa19c4297e9d0f070e36c0.jpg)',
            text: '手機殼',
        },
        {
            key: '2',
            src: 'url(https://i.pinimg.com/564x/93/55/ff/9355ffa0f1aa19c4297e9d0f070e36c0.jpg)',
            text: '手機殼',
        },
        {
            key: '3',
            src: 'url(https://i.pinimg.com/564x/93/55/ff/9355ffa0f1aa19c4297e9d0f070e36c0.jpg)',
            text: '手機殼',
        },
        {
            key: '4',
            src: 'url(https://i.pinimg.com/564x/93/55/ff/9355ffa0f1aa19c4297e9d0f070e36c0.jpg)',
            text: '手機殼',
        },
    ]

    return (
        <>
            <ExampleLayout>
                <Row justify={'center'}>
                    <Col span={24}>
                        <Banner
                            src={'url(https://images.unsplash.com/photo-1493515322954-4fa727e97985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'}
                            text={'簡介'}
                            buttonText={'關於我們'}
                        />
                    </Col>
                    <Col span={23}>
                        <News />
                    </Col>
                    <Col span={23}>
                        <PhotoBlock />
                    </Col>
                    <Col span={23}>
                        <PhotoCarousel />
                    </Col>
                    {/* <Col span={24}>
                        <Service item={item} />
                    </Col>
                    <Col span={24}>
                        <PageWidePic src={'url(https://images.unsplash.com/photo-1493515322954-4fa727e97985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'} />
                    </Col>
                    <Col span={24}>
                        <ScrollIcon item={item} />
                    </Col> */}
                </Row>
            </ExampleLayout>
        </>
    )
}

export default App

const Banner = ({ src, text, buttonText }) => {

    return (
        <div style={{ height: '50vh', backgroundImage: src, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ color: '#ffffff', marginBottom: '16px' }} >{text}</div>
            <Button style={{ backgroundColor: '#00000033', color: '#ffffff' }}>{buttonText}</Button>
        </div>
    )
}

const ExampleLayout = ({ children }) => {

    return (
        <><Layout className="layout">
            {/* <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#ffffff'
                }}
            >
                首頁
            </Header> */}
            <Content>
                <div
                    className="site-layout-content"
                >
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    // textAlign: 'center',
                    padding: '32px 0px',
                    backgroundColor: '#00000033'
                }}
            >
                {/* <Row justify={'center'}>
                    <Col span={10}>
                        <Row gutter={[0, 16]}>
                            <Col span={24}>
                                <div style={{ height: '50px', width: '200px', backgroundColor: '#00000088' }}></div>
                            </Col>
                            <Col span={24} >高株市左谷区文学路2813</Col>
                            <Col span={24} >香業時間：週一至興五 09:00-17:30</Col>
                            <Col span={24} >行勠胃銩，0965219929</Col>
                            <Col span={24} >粥終信箱：ig90617532gmail.con</Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Row gutter={[8, 8]}>
                            <Col span={24}>
                                <Row gutter={[8, 8]}>
                                    <Col style={{ fontSize: '2em', cursor: 'pointer' }} ><FacebookFilled /></Col>
                                    <Col style={{ fontSize: '2em', cursor: 'pointer' }} ><InstagramFilled /></Col>
                                </Row>
                            </Col>
                            <Col span={24}>
                                <div style={{ height: '200px', width: '200px', backgroundColor: '#00000088' }}>

                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row> */}
                <Row gutter={[0, 30]} justify={'center'} >
                    <Col >
                        <Row justify={'center'} gutter={[10, 30]} >
                            <Col>
                                行事曆
                            </Col>
                            <Col>
                                行事曆
                            </Col>
                            <Col>
                                行事曆
                            </Col>
                            <Col>
                                行事曆
                            </Col>
                            <Col>
                                行事曆
                            </Col>
                            <Col>
                                行事曆
                            </Col>
                            <Col>
                                行事曆
                            </Col>
                            <Col>
                                行事曆
                            </Col>
                            <Col>
                                行事曆
                            </Col>
                        </Row>
                    </Col>
                    <Col span={23}>
                        <Row justify={'center'} gutter={[30, 30]} >
                            <Col flex='1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                                <div style={{ padding: '10px 0' }} >
                                    <span>106319 臺北市大安區羅斯福路四段一號</span>
                                </div>
                                <div style={{ padding: '10px 0' }} >
                                    <span>電話總機：02-3366-3366</span>
                                </div>
                                <div style={{ padding: '10px 0' }} >
                                    <span>傳真號碼：02-2362-7651</span>
                                </div>
                            </Col>
                            <Col flex='1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }} >
                                    <Row gutter={10}>
                                        <Col>
                                            <div style={{ height: '30px', width: '30px', borderRadius: '50%', backgroundColor: '#fff' }} />
                                        </Col>
                                        <Col>
                                            <div style={{ height: '30px', width: '30px', borderRadius: '50%', backgroundColor: '#fff' }} />
                                        </Col>
                                        <Col>
                                            <div style={{ height: '30px', width: '30px', borderRadius: '50%', backgroundColor: '#fff' }} />
                                        </Col>
                                        <Col>
                                            <div style={{ height: '30px', width: '30px', borderRadius: '50%', backgroundColor: '#fff' }} />
                                        </Col>
                                        <Col>
                                            <div style={{ height: '30px', width: '30px', borderRadius: '50%', backgroundColor: '#fff' }} />
                                        </Col>
                                        <Col>
                                            <div style={{ height: '30px', width: '80px', backgroundColor: '#fff' }} />
                                        </Col>
                                    </Row>
                                    <div style={{ border: '1px inset #000', width: '30vw', margin: '10px 0' }} />
                                    <Row style={{ color: '#000', }} gutter={[20,10]} justify={'start'} >
                                        <Col>
                                            緊急聯絡
                                        </Col>
                                        <Col>
                                            <div style={{ border: '1px solid #000', height: '100%' }} />
                                        </Col>
                                        <Col>
                                            地圖與交通
                                        </Col>
                                        <Col>
                                            <div style={{ border: '1px solid #000', height: '100%' }} />
                                        </Col>
                                        <Col>
                                            隱私權及資訊安全政策
                                        </Col>
                                        <Col span={24}>
                                            <span>Copyright © 2023 國立臺灣大學 National Taiwan University</span>
                                        </Col>
                                    </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Footer>
        </Layout>
        </>
    )
}