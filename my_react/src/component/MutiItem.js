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
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <Row wrap={false} align={'middle'} gutter={10}>
                <Col>
                    <LeftCircleOutlined onClick={this.previous} style={{ cursor: 'pointer', color: '#00000088', fontSize: '40px' }} />
                </Col>
                <Col flex={'auto'}>
                    <Slider ref={c => (this.slider = c)} {...settings} >
                        <div key={0}>
                            <div>
                                <div style={{ backgroundImage: `url(${img[0]})`, height: '200px', width: '100%', backgroundPosition: 'center', }} />
                                <div style={{ textAlign: 'center', padding: '10px' }}>dksjbksjdbckjd</div>
                            </div>
                        </div>
                        <div key={1}>
                            <div>
                                <div style={{ backgroundImage: `url(${img[1]})`, height: '200px', width: '100%', backgroundPosition: 'center', }} />
                                <div style={{ textAlign: 'center', padding: '10px' }}>dksjbksjdbckjd</div>
                            </div>
                        </div>
                        <div key={2}>
                            <div>
                                <div style={{ backgroundImage: `url(${img[2]})`, height: '200px', width: '100%', backgroundPosition: 'center', }} />
                                <div style={{ textAlign: 'center', padding: '10px' }}>dksjbksjdbckjd</div>
                            </div>
                        </div>
                        <div key={3}>
                            <div>
                                <div style={{ backgroundImage: `url(${img[3]})`, height: '200px', width: '100%', backgroundPosition: 'center', }} />
                                <div style={{ textAlign: 'center', padding: '10px' }}>dksjbksjdbckjd</div>
                            </div>
                        </div>
                    </Slider>
                </Col>
                <Col>
                    <RightCircleOutlined onClick={this.next} style={{ cursor: 'pointer', color: '#00000088', fontSize: '40px' }} />
                </Col>
            </Row>
        );
    }
}