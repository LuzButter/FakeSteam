import { LeftCircleFilled } from "@ant-design/icons"
import { Button, Col, Row, Space } from "antd"
import MutiItem from './MutiItem'

const PageWideCard = (props) => {

    return (
        <div style={{ width: '100%', height: '30vh', backgroundColor: '#00000011' }}>
            <Row justify={'center'} align={'middle'}>
                <Col span={11}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '30vh', justifyContent: 'space-between', padding: '8px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', height: '30vh', paddingBottom: '8px' }}>
                            <span>Application</span>
                            <Space style={{padding: '10px'}}>
                                <div style={{ border: '2px solid lightyellow', width: '2px', height: '36px' }} />
                                <span style={{ fontSize: '28px' }}>案例實境</span>
                            </Space>
                            <span>
                                在上個月的科隆電玩展 Gamescom 上，任天堂提供了《皮克敏4》以及《超級瑪利歐賽車 8 豪華版》等作品的試玩。然而在幕後還準備了某個重量級的壓箱寶。Eurogamer 報導指出任天堂已經閉門展示 Nintendo Switch 後繼機種的技術演示以及系統的用作方式設計等細節。
                            </span>
                        </div>
                        <Button type="primary" style={{width: 'fit-content', padding: '4px 40px'}} >查看更多</Button>
                    </div>
                </Col>
                <Col span={11}>
                    {/* <MutiItem/> */}
                </Col>
            </Row>
        </div>
    )
}

export default PageWideCard