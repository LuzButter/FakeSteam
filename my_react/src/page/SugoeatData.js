import { Col, Row } from "antd"
import NumberData from '../component/NumberData'
import BarLineCombo from '../component/BarLineCombo'
import StorgeStatus from '../component/StorgeStatus'
import LineChart from "../component/LineChart"

const DivCard = {borderRadius: '4px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', padding: '16px' }

const SugoeatData = () => {

    return (
        <>
            <Row gutter={[16,24]} justify={'space-around'} >
                <Col span={24}></Col>
                <Col span={5} style={{...DivCard, }} >
                    <NumberData />
                </Col>
                <Col span={5} style={{...DivCard, }} >
                    <NumberData />
                </Col>
                <Col span={5} style={{...DivCard, }} >
                    <NumberData />
                </Col>
                <Col span={5} style={{...DivCard, }} >
                    <NumberData />
                </Col>
                <Col span={17} style={{...DivCard, }}>
                    <BarLineCombo/>
                </Col>
                <Col span={5} style={{...DivCard, }}>
                    <StorgeStatus/>
                </Col>
                <Col span={11} style={{...DivCard, }}>
                
                </Col>
                <Col span={11} style={{...DivCard, }}>
                    <LineChart />
                </Col>
                <Col span={17} style={{...DivCard, }}>

                </Col>
                <Col span={5} style={{...DivCard, }}>
                    
                </Col>
            </Row>
            {/* <NumberData /> */}
        </>
    )
}

export default SugoeatData