import { Row, Col, Button } from 'antd'
import styled from 'styled-components'
import DonutChart from '../component/Chart/DonutChart'
import Progress from '../component/Chart/Progress'
import BarChart from '../component/Chart/BarChart'

const Card = styled.div`
    border: 1px solid #ddd;
    height: 31vh;
    margin: 1vh;
    padding: 1vh;
    border-radius: 8px;
`
const SideCard = styled.div`
    margin: 1vh;
    border-bottom: 1px solid #ddd;
    padding: 8px 0px;
`

const Dashbroad = () => {

    return (
        <Row style={{ minHeight: '100vh', width: '100vw' }} >
            <Col span={7}>
                <div style={{ borderRight: '2px solid #ddd', margin: '1vh', minHeight: '98vh', padding: '1em' }} >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1em' }} >
                        <span style={{ fontSize: '1.8em', fontWeight: 600 }} >圖書推薦系統</span>
                        <Button type='primary' > 建立推播 </Button>
                    </div>
                    <SideCard style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: 0 }} >
                        <Button type='link' > 查看單位全體成員 </Button>
                        <div style={{ height: '1em', borderLeft: '1px solid #ddd' }} />
                        <Button type='link' > 查看校園全體成員 </Button>
                    </SideCard>
                    <SideCard >
                        <Display style={{ display: 'flex', height: '15vh' }} >
                            <Row align={'middle'} style={{ width: '100%' }} gutter={8} >
                                <Col style={{ width: '15vh', height: '15vh', }} >
                                    <DonutChart />
                                </Col>
                                <Col flex={'auto'} style={{ display: 'flex', flexDirection: 'column', height: '100%' }} >
                                    <Progress barStyle={{ height: '0.8em' }} persent={48} AddAfter="48%" color={'#ee11cc'} />
                                    <Progress barStyle={{ height: '0.8em' }} />
                                    <Progress barStyle={{ height: '0.8em' }} />
                                </Col>
                            </Row>
                        </Display>
                    </SideCard>
                    <SideCard >
                        <Display style={{ minHeight: '15vh' }} >
                            <BarChart />
                        </Display>
                    </SideCard>
                    <SideCard />
                    <SideCard />
                    <SideCard />
                </div>
            </Col>
            <Col span={17}>
                <Row justify={'space-around'} >
                    <Col span={12} >
                        <Card />
                    </Col>
                    <Col span={12} >
                        <Card />
                    </Col>
                    <Col span={12} >
                        <Card />
                    </Col>
                    <Col span={12} >
                        <Card />
                    </Col>
                    <Col span={24} >
                        <Card />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

const Display = ({ title = 'default title', SeeAll = {}, children, style }) => {

    return (
        <Row>
            <Col span={24}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }} >
                    <span style={{ fontSize: '1.2em', fontWeight: 600 }} >{title}</span>
                    <Button style={{ padding: 0 }} type='link' onClick={SeeAll} >See All</Button>
                </div>
            </Col>
            <Col span={24} style={{ ...style }} >
                {children}
            </Col>
        </Row>
    )
}

export default Dashbroad