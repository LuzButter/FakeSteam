import React, { Component, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Space } from "antd";
import { ArrowRightOutlined, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

let img = [
    'https://i.pinimg.com/564x/e3/62/ed/e362edaca1655902b378301c220c102f.jpg',
    'https://i.pinimg.com/564x/22/2a/9c/222a9c37ec4cac138a6353269c495121.jpg',
    'https://i.pinimg.com/564x/04/0f/b5/040fb5f02174db04202d7c9143bea195.jpg',
    'https://i.pinimg.com/564x/0a/e3/75/0ae37530aa204024e0307e3f913b945d.jpg'
]



export default class PreviousNextMethods extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {

        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <Row justify={'space-around'}>
                <Col span={5}>
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content'}} >
                            <div style={{border: '2px solid #944e4e', width: '30px'}} />
                            <div style={{fontSize: '30px', fontWeight: '600', padding: '10px 0'}} >校園生活</div>
                            <div style={{fontWeight: '500'}} >查看更多<ArrowRightOutlined/></div>
                        </div>
                        <div>
                            <div style={{ textAlign: "center", paddingBottom: '20px' }}>
                                <div>
                                    <hr style={{borderColor: '#0000011'}} />
                                </div>
                                <Row justify={'space-between'} >
                                    <Col>
                                        1/4
                                    </Col>
                                    {/* <Col>
                                        <button className="button" onClick={this.previous}>
                                            Previous
                                        </button>
                                        <button className="button" onClick={this.next}>
                                            Next
                                        </button>
                                    </Col> */}
                                    <Col>
                                        <Space>
                                            <LeftCircleOutlined onClick={this.previous} style={{cursor: 'pointer', color: '#00000088'}}  />
                                            <div style={{height: '1em', border: '1px solid #00000088'}} />
                                            <RightCircleOutlined onClick={this.next} style={{cursor: 'pointer', color: '#00000088'}}  />
                                        </Space>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col span={17}>
                    <div>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <div key={0}>
                                <div>
                                    <div style={{ backgroundImage: `url(${img[0]})`, height: '40vh', width: '100%', backgroundPosition: 'center', }} />
                                    <div style={{ textAlign: 'center', padding: '10px' }}>dksjbksjdbckjd</div>
                                </div>
                            </div>
                            <div key={1}>
                                <div>
                                    <div style={{ backgroundImage: `url(${img[1]})`, height: '40vh', width: '100%', backgroundPosition: 'center', }} />
                                    <div style={{ textAlign: 'center', padding: '10px' }}>dksjbksjdbckjd</div>
                                </div>
                            </div>
                            <div key={2}>
                                <div>
                                    <div style={{ backgroundImage: `url(${img[2]})`, height: '40vh', width: '100%', backgroundPosition: 'center', }} />
                                    <div style={{ textAlign: 'center', padding: '10px' }}>dksjbksjdbckjd</div>
                                </div>
                            </div>
                            <div key={3}>
                                <div>
                                    <div style={{ backgroundImage: `url(${img[3]})`, height: '40vh', width: '100%', backgroundPosition: 'center', }} />
                                    <div style={{ textAlign: 'center', padding: '10px' }}>dksjbksjdbckjd</div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Col>
            </Row>
        );
    }
}