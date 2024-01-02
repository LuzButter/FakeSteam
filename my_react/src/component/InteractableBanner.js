import React, { Component, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Space } from "antd";
import { ArrowRightOutlined, ClockCircleFilled, LeftCircleOutlined, LeftSquareFilled, MailFilled, PhoneFilled, PhoneOutlined, RightCircleOutlined, RightSquareFilled } from "@ant-design/icons";

let img = [
    'https://i.pinimg.com/564x/e3/62/ed/e362edaca1655902b378301c220c102f.jpg',
    'https://i.pinimg.com/564x/22/2a/9c/222a9c37ec4cac138a6353269c495121.jpg',
    'https://i.pinimg.com/564x/04/0f/b5/040fb5f02174db04202d7c9143bea195.jpg',
    'https://i.pinimg.com/564x/0a/e3/75/0ae37530aa204024e0307e3f913b945d.jpg'
]

const App = () => {

    const ref = React.createRef()

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Row justify={'space-around'}>
            <Col span={24}>
                <div>
                    <Slider ref={ref} {...settings}>
                        <div key={0}>
                            <div>
                                <div style={{ backgroundImage: `url(${img[0]})`, height: '50vh', width: '100%', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                            </div>
                        </div>
                        <div key={1}>
                            <div>
                                <div style={{ backgroundImage: `url(${img[1]})`, height: '50vh', width: '100%', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                            </div>
                        </div>
                        <div key={2}>
                            <div>
                                <div style={{ backgroundImage: `url(${img[2]})`, height: '50vh', width: '100%', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                            </div>
                        </div>
                        <div key={3}>
                            <div>
                                <div style={{ backgroundImage: `url(${img[3]})`, height: '50vh', width: '100%', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                            </div>
                        </div>
                    </Slider>
                </div>
            </Col>
            <div style={{ position: 'absolute', bottom: '0px', width: '100%' }}>
                <Row align={'middle'} style={{ borderTop: '2px solid #ffffff55', padding: '8px 0px' }} >
                    <Col flex={'auto'} style={{ textAlign: 'center', }}  >
                        <Space>
                            <LeftSquareFilled onClick={() => ref.current.slickPrev()} style={{ cursor: 'pointer', color: '#00000088', fontSize: '48px' }} />
                            <RightSquareFilled onClick={() => ref.current.slickNext()} style={{ cursor: 'pointer', color: '#00000088', fontSize: '48px' }} />
                        </Space>
                    </Col>
                    <Col flex={'auto'} style={{ textAlign: 'center', }} >
                        <Space>
                            <PhoneFilled style={{ color: '#00000088', fontSize: '40px' }} />
                            <Space direction="vertical" style={{ color: 'white', fontWeight: '500' }} ><span>Phone</span><span>+(886)987-654-321</span></Space>
                        </Space>
                    </Col>
                    <Col flex={'auto'} style={{ textAlign: 'center', }} >
                        <Space>
                            <ClockCircleFilled style={{ color: '#00000088', fontSize: '40px' }} />
                            <Space direction="vertical" style={{ color: 'white', fontWeight: '500' }} ><span>Opening Times</span><span>Mon - Fri 9:00-17:00 GMT</span></Space>
                        </Space>
                    </Col>
                    <Col flex={'auto'} style={{ textAlign: 'center', }} >
                        <Space>
                            <MailFilled style={{ color: '#00000088', fontSize: '40px' }} />
                            <Space direction="vertical" style={{ color: 'white', fontWeight: '500' }} ><span>E-mail address</span><span>example@gmail.com</span></Space>
                        </Space>
                    </Col>
                </Row>
            </div>
        </Row>
    )
}
export default App