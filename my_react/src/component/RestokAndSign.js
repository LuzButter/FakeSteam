import { EditFilled } from "@ant-design/icons"
import { Button, Card, Col, Image, Input, Row, Space, Table, Typography } from "antd"

const App = () => {
    return (
        <Row justify={'center'}>
            <Col span={23}>
                <Row justify={'center'}>
                    <Col>
                        <Space style={{ fontSize: '24px' }}>
                            <div style={{ backgroundColor: 'orange', padding: '3px 5px', borderRadius: '50%', color: 'white' }}><EditFilled /></div>
                            <span style={{ fontWeight: '600' }}>進貨簽收</span>
                        </Space>
                    </Col>
                </Row>
            </Col>
            <Col span={23}>
                <Row gutter={8}>
                    <Col span={8}>
                            <Card
                                bodyStyle={{ backgroundColor: 'rgb(255 248 231)', borderRadius: '8px', padding: '0' }}
                                style={{ border: 'none' }}
                            >
                                <Typography.Title level={3} style={{ margin: '0' }}>
                                    <span style={{ backgroundColor: '#fde8d2', padding: '5px 1em', borderRadius: '8px' }}>歷史報價</span>
                                </Typography.Title>
                                <div style={{ padding: '32px 16px' }}>
                                    <Space direction="vertical">
                                        <Space>客戶名稱<Input /></Space>
                                        <Space>確認簽名<Button size="small">簽名</Button></Space>
                                    </Space>
                                </div>
                            </Card>
                    </Col>
                    <Col span={8}>
                            <Card
                                bodyStyle={{ backgroundColor: 'rgb(231 250 255)', borderRadius: '8px', padding: '0' }}
                                style={{ border: 'none' }}
                            >
                                <Typography.Title level={3} style={{ margin: '0' }}>
                                    <span style={{ backgroundColor: 'rgb(210 230 253)', padding: '5px 1em', borderRadius: '8px' }}>訂單資訊</span>
                                </Typography.Title>
                                <div style={{ padding: '32px 16px' }}>
                                    <Space direction="vertical">
                                        <Space>送貨日期<Input defaultValue={'2023/8/8'}/></Space>
                                        <Button size="small">一件確認</Button>
                                        <Table/>
                                    </Space>
                                </div>
                            </Card>
                    </Col>
                    <Col span={8}>
                            <Card
                                bodyStyle={{ backgroundColor: 'rgb(231 255 242)', borderRadius: '8px', padding: '0' }}
                                style={{ border: 'none' }}
                            >
                                <Typography.Title level={3} style={{ margin: '0' }}>
                                    <span style={{ backgroundColor: 'rgb(210 253 212)', padding: '5px 1em', borderRadius: '8px' }}>收貨端</span>
                                </Typography.Title>
                                <div style={{ padding: '32px 16px' }}>
                                    <Space direction="vertical">
                                        <Space>簽收單位<Input /></Space>
                                        <Space>簽收人員<Input /></Space>
                                        <Space>確認簽名<Button size="small">簽名</Button></Space>
                                    </Space>
                                </div>
                            </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default App