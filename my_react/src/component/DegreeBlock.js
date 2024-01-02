import { Col, Row } from "antd"

const App = () => {

    const size = 15
    const setting = { width: size + 'vw', height: size + 'vw', backgroundColor: 'rgb(221, 198, 161)', margin: size / 40 + 'vw', overflow: 'hidden' }
    const imgBlock = { height: size * 1.42 + 'vw', width: size * 1.42 + 'vw', backgroundSize: 'cover', rotate: '-45deg', backgroundPosition: 'center', position: 'relative', top: '-' + size / 4.7 + 'vw', left: '-' + size / 4.7 + 'vw' }

    return (
        <div style={{ width: '100vw', height: size * 2.97 + 'vw', overflow: 'hidden' }} >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', rotate: '45deg', position: 'relative', bottom: '22.3vw', left: '15vw' }} >
                <div style={{ display: 'flex' }} >
                    <div style={{ ...setting, }} />
                    <div style={{ ...setting, }} />
                    <div style={{ ...setting, }} />
                    <div style={{ ...setting, }} />
                </div>
                <div style={{ display: 'flex' }} >
                    <div style={{ ...setting, backgroundColor: '#00000000' }} />
                    <div style={{ ...setting, }} >
                        {/* 上圖 upper pic */}
                        <div style={{ ...imgBlock, backgroundImage: 'url(https://i.pinimg.com/564x/ae/11/ef/ae11ef3e6b2a255729e0a98b98c29e8e.jpg)', }} />
                    </div>
                    {/* 中小圖 middle smaller pic */}
                    <div style={{ ...setting, }} >
                        <div style={{ ...imgBlock, backgroundImage: 'url(https://i.pinimg.com/564x/5a/5a/e2/5a5ae233513f498e47916968346e0472.jpg)' }} />
                    </div>
                    {/* 三角圖 triangle pic */}
                    <div style={{ ...setting, }} >
                        <div style={{ ...imgBlock, backgroundImage: 'url(https://i.pinimg.com/564x/49/b1/a7/49b1a743884aa4a11255265c2c66b1b0.jpg)' }} />
                    </div>
                </div>
                <div style={{ display: 'flex' }} >
                    {/* 大圖 the big one */}
                    <div style={{ ...setting, width: size * 2 + size / 20 + 'vw', height: size * 2 + size / 20 + 'vw', }} >
                        <div style={{ height: size * 3 + 'vw', width: size * 3 + 'vw', backgroundImage: 'url(https://i.pinimg.com/474x/7d/12/54/7d12542427fb5110348fcf549a9f63a8.jpg)', rotate: '-45deg', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', top: '-' + size / 2 + 'vw', left: '-' + size / 2 + 'vw' }} />
                    </div>
                    {/* 下圖 lower pic */}
                    <div style={{ ...setting, }} >
                        <div style={{ ...imgBlock, backgroundImage: 'url(https://i.pinimg.com/564x/cc/5e/bd/cc5ebd5b5949f39d197844a79b4487b9.jpg)' }} />
                    </div>
                    <div style={{ ...setting, }} />
                </div>
            </div>
            <div style={{ position: 'relative', bottom: size * 4 + 'vw', left: size * 1 + 'vw' }} >
                <Row wrap={false} align={'middle'} gutter={8} >
                    <Col>
                        <div style={{ height: '1.4em', width: '1.4em', backgroundColor: 'rgb(221, 198, 161)' }} />
                    </Col>
                    <Col style={{color: 'rgb(221, 198, 161)', fontSize: '1.5em', fontWeight: '500' }} >
                        creativity  service quality
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default App