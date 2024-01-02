import { FacebookFilled } from "@ant-design/icons"
import { Col, Row } from "antd"

const App = () => {

    return (
        <div style={{ backgroundColor: '#469088', }}>
            <Row style={{ height: '100%' }} >
                <Col flex={'auto'}>
                    <DataShow />
                </Col>
                <Col style={{ alignSelf: 'center' }}>
                    <div style={{ height: '100px', border: '1px solid #ffffff' }} />
                </Col>
                <Col flex={'auto'}>
                    <DataShow />
                </Col>
                <Col style={{ alignSelf: 'center' }}>
                    <div style={{ height: '100px', border: '1px solid #ffffff' }} />
                </Col>
                <Col flex={'auto'}>
                    <DataShow />
                </Col>
            </Row>
        </div>
    )
}

const DataShow = () => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#fff' }}>
            <div style={{ fontSize: '40px', color: '#fff' }} >
                <FacebookFilled />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                <div style={{fontSize: '3em'}}>
                    <span>875 MW</span>
                </div>
                <div>
                    <span  style={{fontSize: '1.1em'}}>地面型</span>
                    <span  style={{fontSize: '0.9em'}}>Rooftop</span>
                </div>
            </div>
        </div>
    )
}

export default App