import { Button, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const CardTitle = styled.span`
font-size: 1.4em;
font-weight: 500;
`
const CardHr = styled.hr`
border: 1px solid gray ;
`

const App = () => {

    const data = [
        {
            key: 1,
            title: '123',
            src: 'https://i.pinimg.com/564x/4c/e8/9e/4ce89e51ec2679fddc3ed78064b213cb.jpg'
        },
        {
            key: 2,
            title: '456',
            src: 'https://i.pinimg.com/474x/ad/96/91/ad96916d8789937e9391095ad0d2a14f.jpg'
        },
        {
            key: 3,
            title: '789',
            src: 'https://i.pinimg.com/564x/63/5d/03/635d039035817282e43880d572c38366.jpg'
        }
    ]

    return (
        <Row justify={'center'} >
            <Col>
                <span style={{fontSize: '1.5em', fontWeight: '500'}} >project result</span>
                <hr style={{width: '60%', border: '2px solid orange '}} />
            </Col>
            <Col span={24}>
                <Row justify={'space-around'}>
                    <Col span={7}>
                        <CardTitle>water</CardTitle>
                        <CardHr />
                        <div style={{ backgroundColor: 'lightgray', height: '30vh', backgroundImage: `url(${data[0].src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                    </Col>
                    <Col span={7} style={{ paddingTop: '6vh' }} >
                        <div style={{ backgroundColor: 'lightgray', height: '30vh', backgroundImage: `url(${data[1].src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                        <CardHr />
                        <CardTitle>roof</CardTitle>
                    </Col>
                    <Col span={7} style={{ paddingTop: '3vh' }} >
                        <CardTitle>ground</CardTitle>
                        <CardHr />
                        <div style={{ backgroundColor: 'lightgray', height: '30vh', backgroundImage: `url(${data[2].src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row justify={'end'}>
                    <Col style={{paddingRight: '2vw'}}>
                    <Button>更多資料</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default App