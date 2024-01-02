import { Col, Row, Space } from "antd"

const App = () => {

    const blockStyle = {
        height: '100px',
        backgroundColor: 'gray',
        margin: '8px',
    }

    return (
        <>
            <Row>
                <Col span={24}>
                    <Row align={'bottom'}>
                        <Col>
                            <div style={{ border: 'solid orange 4px', width: '4px', height: '3.5em', marginRight: '4px' }} />
                        </Col>
                        <Col>
                            <span style={{ fontSize: '2em' }} >開班資訊</span>
                        </Col>
                    </Row>
                </Col>
                <Col span={24} style={{display: 'flex'}}>
                    <div style={{ ...blockStyle, width: '33%' }} />
                    <div style={{ ...blockStyle, width: '33%' }} />
                    <div style={{ ...blockStyle, width: '33%' }} />
                </Col>
                <Col span={24} style={{display: 'flex'}}>
                    <div style={{ ...blockStyle, width: '33%' }} />
                    <div style={{ ...blockStyle, width: '30%' }} />
                    <div style={{ ...blockStyle, width: '36%' }} />
                </Col>
            </Row>
        </>
    )
}

export default App