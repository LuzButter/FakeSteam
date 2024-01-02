import React, { useState } from "react";
import { Row, Col, Collapse, Space, Divider, Tabs, Table, Button, Modal, Checkbox, ConfigProvider } from "antd";
import JoditEditor from "jodit-react";
import styled from "styled-components"
// import './page.css'
const { Panel } = Collapse;;

const TextBox = styled.div`
border-radius: 10px;
padding: 10px 10px;
margin: 2px;
box-shadow: 0px 2px 4px #cccccc;
`
const TeskBox = styled.div`
border-radius: 10px;
padding: 10px 10px;
margin: 2px;
height: 50px;
display: flex;
align-items: center;
background-color: rgb(142, 119, 93);
color:white;
`
const BoxStyle = {
    borderRadius: '10px',
    boxShadow: '0px 2px 4px #cccccc',
    padding: '10px 10px',
    margin: '2px'
}
const Meeting = () => {

    const [templateModal, setTemplateModal] = useState()


    const dataSource = [
        {
            key: '1',
            Title: <TeskBox>RFID<br />進度一</TeskBox>,
            Owner: 'UZ Lin',
            Progress: '進度一',
            file: <Space direction="vertical"><FileBox /><FileBox /></Space>,
        },
        {
            key: '2',
            Title: <TeskBox>RFID<br />進度二</TeskBox>,
            Owner: 'UZ Lin',
            Progress: '進度二',
            file: <Space direction="vertical"><FileBox /></Space>,
        },
        {
            key: '2',
            Title: <TeskBox>RFID<br />進度二</TeskBox>,
            Owner: 'UZ Lin',
            Progress: '進度二',
            file: <Space direction="vertical"><FileBox /></Space>,
        },
        {
            key: '2',
            Title: <TeskBox>RFID<br />進度二</TeskBox>,
            Owner: 'UZ Lin',
            Progress: '進度二',
            file: <Space direction="vertical"><FileBox /></Space>,
        },
    ];
    const columns = [
        {
            title: '追蹤事項',
            dataIndex: 'Title',
            key: 'Title',
        },
        {
            title: '負責人',
            dataIndex: 'Owner',
            key: 'Owner',
        },
        {
            title: '進度回報',
            dataIndex: 'Progress',
            key: 'Progress',
        },
        {
            title: '相關附件',
            dataIndex: 'file',
            key: 'file',
        },
    ];
    const items = [
        {
            key: '1',
            label: `順序`,
            children: <TeskTable dataSource={dataSource} columns={columns} height='30vh' />,
        },
        {
            key: '2',
            label: `已完成`,
            children: <TeskTable dataSource={dataSource} columns={columns} height='30vh' />,
        },
        {
            key: '3',
            label: `未完成`,
            children: <TeskTable dataSource={dataSource} columns={columns} height='30vh' />,
        },
    ];

    return (<ConfigProvider
    theme={{
        "token": {
          "colorTextBase": "#5b4c3b",
          "colorPrimary": "rgb(225, 140, 65)"
        }
      }}>
        <Row gutter={[20, 20]} style={{ padding: '3vh' }}>
            <Col span={10} style={{ maxHeight: '94vh', overflow: 'auto' }}>
                <Row gutter={[10, 10]}>
                    <Col span={24}>
                        <Row justify={'space-between'} wrap={false}>
                            <Col>
                                <Space direction="vertical">
                                    <text style={{ fontSize: '14px', color: '#888888' }}>{'會議名稱'}</text>
                                    <TextBox className='lama'>
                                        <text style={{ fontSize: '16px', fontWeight: '450', overflow: 'hidden', }}>{'行政主管例行會議'}</text>
                                    </TextBox>
                                </Space>
                            </Col>
                            <Col>
                                <Space direction="vertical">
                                    <text style={{ fontSize: '14px', color: '#888888' }}>{'會議類型'}</text>
                                    <TextBox className='lama'>
                                        <text style={{ fontSize: '16px', fontWeight: '450' }}>{'例行會議'}</text>
                                    </TextBox>
                                </Space>
                            </Col>
                            <Col>
                                <Space direction="vertical">
                                    <text style={{ fontSize: '14px', color: '#888888' }}>{'會議時間'}</text>
                                    <TextBox className='lama'>
                                        <text style={{ fontSize: '16px', fontWeight: '450' }}>{'2023/05/16 2:22'}</text>
                                    </TextBox>
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Collapse bordered={false}>
                            <Panel header="參與人員" extra={<text style={{}}></text>} key="1" style={{ ...BoxStyle, backgroundColor: 'white' }}>
                                <Divider orientation="left">{'參與人員'}</Divider>
                                <Space wrap>
                                    <UserBox />
                                    <UserBox />
                                    <UserBox />
                                    <UserBox />
                                    <UserBox />
                                </Space>
                                <Divider orientation="left">{'參與人員'}</Divider>
                                <Space wrap>
                                    <UserBox />
                                    <UserBox />
                                    <UserBox />
                                </Space>
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col span={24}>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col><text>{'追蹤事項'}</text></Col>
                            <Col><Button type="primary" className="lama">{'新增追蹤事項'}</Button></Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <TextBox style={{ padding: '10px 20px' }}>
                            <Tabs defaultActiveKey="1" items={items} />
                        </TextBox>
                    </Col>
                    <Col span={24}>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col><text>{'臨時動議'}</text></Col>
                            <Col><Button type="primary"  className="lama">{'新增臨時動議'}</Button></Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <TextBox style={{ padding: '10px 20px' }}>
                            <TeskTable dataSource={dataSource} columns={columns} height='16vh' />
                        </TextBox>
                    </Col>
                </Row>
            </Col>
            <Col span={14} style={{ height: '94vh', overflow: 'auto' }}>
                <Row gutter={[10, 10]}>
                    <Col span={24}>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col>
                                <text>{'會議記錄'}</text>
                            </Col>
                            <Col>
                                <Button onClick={() => setTemplateModal(true)}>{'帶入模板'}</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <div>
                            <JoditEditor />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Modal open={templateModal} title='選擇模板' bodyStyle={{ maxHeight: '500px', overflow: 'auto' }} okText={'選擇模板'} cancelText={'取消'} onCancel={() => setTemplateModal(false)} onOk={() => setTemplateModal(false)} >
            <Row gutter={[0, 5]}>
                <Col span={24}>
                    <TeskBox style={{margin: '0px'}}>
                        <Row justify={'space-between'} style={{width: '100%'}}>
                            <Col>
                                {'模板一'}
                            </Col>
                            <Col>
                                <Checkbox />
                            </Col>
                        </Row>
                    </TeskBox>
                </Col>
            </Row>
        </Modal>
    </ConfigProvider>
    )
}

const UserBox = (props) => {

    return (
        <Space>
            <div style={{ width: '50px', height: '50px', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '50%', backgroundImage: 'url(https://cdn.discordapp.com/attachments/1105505890108440587/1105522422301609994/D5424D2A-A62F-43DE-ADA2-994B94425E02.jpg)' }} />
            <div style={{ fontSize: '16px', whiteSpace: 'nowrap' }}>UZ Lin</div>
        </Space>
    )
}

const TeskTable = (props) => {

    return (
        <Table dataSource={props.dataSource} columns={props.columns} size="small" pagination={false} scroll={{ y: props.height }} />
    )
}

const FileBox = (props) => {

    return (
        <Space>
            <div style={{ width: '24px', height: '24px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: 'url(https://cdn.iconscout.com/icon/free/png-256/free-javascript-2752148-2284965.png)' }} />
            <text style={{ fontWeight: '600', }}>{'index.js'}</text>
        </Space>
    )
}

export default Meeting