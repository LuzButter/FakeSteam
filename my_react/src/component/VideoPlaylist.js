import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Col, Menu, Row, Space } from "antd"

const App = () => {

    const onClick = (e) => {
        console.log('click ', e);
    };
    const items = [
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined />,
        },
        {
            label: 'Cyberpunk: Edgerunners | “I Really Want to Stay At Your House” by Rosa Walton | Music Video',
            key: 'app',
            icon: <Space>
                <div style={{ backgroundImage: 'url(https://i.ytimg.com/vi/KvMY1uzSC1E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSszujRHkjGwe6GsEbKQ_HUkPOYQ)', height: '40px', width: '32px', backgroundSize: 'contain' }} ></div>
                {/* <div>Cyberpunk: Edgerunners | “I Really Want to Stay At Your House” by Rosa Walton | Music Video</div> */}
            </Space>,
        },
    ];
    return (
        <Row style={{ height: '30vh' }} wrap={false}>
            <Col>
                <iframe style={{ width: '65vw', height: '37vw' }} src="https://www.youtube.com/embed/KvMY1uzSC1E?si=q3X6Uuz2u1JJPKod" title="YouTube vApp player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>
            <Col flex={'auto'}>
                <Menu
                    onClick={onClick}
                    style={{
                        // width: 256,
                    }}
                    defaultSelectedKeys={['mail']}
                    mode="inline"
                    items={items}
                />
            </Col>
        </Row>
    )
}

export default App