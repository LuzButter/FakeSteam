import React, { useState, useMemo, useEffect } from "react";
import { Row, Col, Space, Select, ColorPicker, Button } from "antd";
import ThemeChanger from '../component/ThemeChanger'

localStorage.setItem('themeColor', '#d817ff')

const App = () => {

    const [layout, setLayout] = useState(2)
    const [colorHex, setColorHex] = useState(localStorage.getItem('themeColor'));
    const [formatHex, setFormatHex] = useState('hex');
    const hexString = useMemo(
        () => (typeof colorHex === 'string' ? colorHex : colorHex.toHexString()),
        [colorHex],
    );
    useEffect(() => {
        localStorage.setItem('themeColor', hexString)
    }, [hexString])

    return (
        <>
            <ThemeChanger layout={layout}>
                <Row gutter={[0, 32]}>
                    <Col span={24}>
                        <Space wrap direction="vertical">
                            <Select
                                defaultValue="layout 1"
                                style={{
                                    width: 120,
                                }}
                                onChange={setLayout}
                                options={[
                                    {
                                        value: 1,
                                        label: 'layout 1',
                                    },
                                    {
                                        value: 2,
                                        label: 'layout 2',
                                    },
                                ]}
                            />
                            <Space>
                                <Col>
                                    <ColorPicker
                                        format={formatHex}
                                        value={colorHex}
                                        onChange={setColorHex}
                                        onFormatChange={setFormatHex}
                                    />
                                </Col>
                                <Col>
                                    Theme Color : <span>{hexString}</span>
                                </Col>
                            </Space>
                            {/* <CP /> */}
                        </Space>
                    </Col>
                    <Col span={24}>
                        <Space wrap>
                            <Button type="primary">Primary Button</Button>
                            <Button>Default Button</Button>
                            <Button type="dashed">Dashed Button</Button>
                            <Button type="text">Text Button</Button>
                            <Button type="link">Link Button</Button>
                        </Space>
                    </Col>
                </Row>

            </ThemeChanger>
        </>
    )
}

export default App