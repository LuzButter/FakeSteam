import { Button, Col, Row } from "antd"

const AboutUs = () => {

    return (
        <>
            <div style={{ 
                width: '100vw', 
                height: '40vh', 
                backgroundImage: 'url(https://i.pinimg.com/564x/7f/72/a2/7f72a263ac35e3a3c40cb793febe8dd2.jpg)', 
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'space-between'
                }} >
                {/* picture */}
                <div style={{
                    height: '75%',
                    width: '45vw',
                    backgroundImage: 'url(https://i.pinimg.com/564x/ea/a3/1d/eaa31d275f957001571c3c1806204a48.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    position: 'relative',
                    top: '1vw',
                    left: '1vw'
                }} />
                {/* text */}
                <div style={{
                    width: '45vw',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    margin: '2vw',
                    flexDirection: 'column'
                }}>
                    <div style={{ color: '#fff', fontSize: '10vw', fontWeight: '650', opacity: '0.3', }}>
                        ABOUT
                    </div>
                    <Row justify={'end'} style={{ color: '#fff', position: 'relative', top: '-12vw' }}>
                        <Col span={24} style={{ fontSize: '5vw' }} >
                            <span>關於小熊</span>
                        </Col>
                        <Col span={24} style={{fontWeight: '450', fontSize: '1.1em',lineHeight: '2rem'}}>
                            <div>關於小熊的事 也關於你關於我</div>
                            <div>關於留關於走 關於喜歡與否</div>
                            <div>關於小熊的事 也關於你關於我</div>
                            <div>關於留關於走 關於喜歡與否</div>
                        </Col>
                        <Col style={{paddingTop: '20px'}}>
                            <Button style={{ borderRadius: '16px' }} >MORE +</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default AboutUs