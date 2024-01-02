import { ArrowDownOutlined, ArrowUpOutlined, } from "@ant-design/icons"
import { Col, Row, Select } from "antd"
import { useState } from "react"

const data = {
    title: '會員人數',
    subtitle: '(有效帳號)',
    date: [
        {
            date: '當天',
            total: 12345,
            diff: -14,
        },
        {
            date: '8/31',
            total: 12345,
            diff: +134,
        },
    ]
}

const App = ({ data }) => {

    const [total, ] = useState(data.date[0].total)
    const [diff, ] = useState(data.date[0].diff)

    // const HandleSelect = {

    // }

    return (
        <>
            <div style={{ width: '200px', boxShadow: 'rgb(0 0 0 / 35%) 0px 0px 4px', padding: '16px' }} >
                <Row gutter={[8,2]} >
                    <Col span={12} style={{color: '#ab30ab'}} >
                        <div>
                            {data.title}
                        </div>
                        <div>
                            {data.subtitle}
                        </div>
                    </Col>
                    <Col span={12}>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: '100%',
                            }}
                            // onChange={}
                            size="small"
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                                {
                                    value: 'disabled',
                                    label: 'Disabled',
                                    disabled: true,
                                },
                            ]}
                        />
                    </Col>
                    <Col span={24}>
                            <div style={{fontSize: '1.8em', marginBottom: '0.3em', fontWeight: "500"}} >{total}人</div>
                    </Col>
                    <Col span={24} >
                        {
                            diff>0? 
                            <div>
                                <ArrowUpOutlined style={{color: 'green'}} />
                                <span> {diff} 跟昨天相比</span>
                            </div>
                            :
                            <div>
                                <ArrowDownOutlined style={{color: 'red'}} />
                                <span> {diff} 跟昨天相比</span>
                            </div>
                        }
                    </Col>
                </Row>
            </div>
        </>
    )
}

const Example = () => {

    return(
        <App data={data} />
    )
}

export default Example