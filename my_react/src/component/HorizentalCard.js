import { ClockCircleOutlined, EnvironmentFilled, PrinterFilled } from "@ant-design/icons"
import { Col, Row } from "antd"

const App = (height = '500px', width = '1000px') => {

    return (
        <div style={{ width: '1000px', height: '300px', boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 4px 0px', display: 'flex' }}>
            <div style={{ height: '100%', width: '45%', background: 'url(https://i.pinimg.com/564x/22/d0/c4/22d0c463e86d2cd8f82f6da79781d4bf.jpg)', backgroundSize: 'cover' }} />
            <div style={{ height: '100%', width: '55%', padding: '6% 3%' }} >
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }} >
                    <span style={{fontSize: '1.3em', fontWeight: '600'}} >漢神巨蛋門市</span>
                    <Row gutter={[0,10]} >
                        <Col span={24}>
                            <Row gutter={8} >
                                <Col style={{fontSize: '1.1em', color: 'rgb(52,117,139	)' }}>
                                    <EnvironmentFilled />
                                </Col>
                                <Col style={{fontSize: '1.1em', color: '#555555'}}>
                                    <div>
                                        ygwiuhoiejwufi
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row gutter={8} >
                                <Col style={{fontSize: '1.1em', color: 'rgb(52,117,139	)' }}>
                                    <ClockCircleOutlined />
                                </Col>
                                <Col style={{fontSize: '1.1em', color: '#555555'}}>
                                    <div>
                                        dwqsd
                                    </div>
                                    <div>
                                        edhud
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default App