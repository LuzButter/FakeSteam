import React, { useState } from 'react';
import './page.css'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Link } from 'react-router-dom';
import { Col, Row, Statistic, TimePicker, Button, Modal, Input } from 'antd';
const { Countdown } = Statistic;

dayjs.extend(customParseFormat);

const App = () => {
    const [triggered, setTriggered] = useState(false);
    const [sec, setSec] = useState(0);
    const [timer, setTimer] = useState(false)
    const [dl, setDl] = useState(Date.now() + 1000 * 5) // Dayjs is also OK

    const triggerESP = async () => {
        setTriggered(!triggered)
        try {
            const response = await fetch('http://192.168.0.122/trigger', {
                method: 'GET',
            });
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    };

    const countdown = async () => {
        setTriggered(!triggered);
        try {
            const url = `http://http://192.168.0.122/countdown?seconds=2`;

            // 發送GET請求
            const response = await fetch('http://http://192.168.0.122/countdown?seconds=2', {
                method: 'GET',
            });

            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };
    const onFinish = () => {
        setTimer(false)
        triggerESP()
        console.log('finished!')
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setDl(Date.now() + 1000 * sec)
        setTimer(true);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div

            className='On'
        >
            <div
                // onClick={triggerESP}
                className={`Off ${triggered ? 'FadeIn' : ''} `}
            >
            </div>

            <div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 16
                }}
            >
                <Button
                    style={{
                        width: '40vw',
                        height: '16vw',
                        borderRadius: '8vw',
                        fontSize: '1.4em',
                        fontWeight: 300,
                    }}
                    onClick={triggerESP}
                >
                    {triggered ? <span>關燈</span> : <span>開燈</span>}
                </Button>
                <Button
                    style={{
                        width: '40vw',
                        height: '16vw',
                        borderRadius: '8vw',
                        fontSize: '1.4em',
                        fontWeight: 300,
                    }}
                    onClick={showModal}
                >
                    <span>定時</span> {triggered ? <span>關燈</span> : <span>開燈</span>}
                </Button>
                {
                    timer ?
                        <Countdown title="Countdown" value={dl} onFinish={onFinish} />
                        :
                        <></>
                }
            </div>
            <Modal open={isModalOpen} footer={null} closable={false} centered width={'80vw'} >
                <Row justify={'center'} gutter={[0, 16]} >
                    <Col span={24} />
                    <Col span={18}>
                        <Input placeholder="輸入時間"  onChange={e => setSec(parseInt(e.target.value))} />
                        {console.log(sec)}
                    </Col>
                    <Col>
                        <Button onClick={handleCancel} danger >
                            取消
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={handleOk}  >
                            開始倒數
                        </Button>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
};

export default App;