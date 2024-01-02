import React, { useState, useRef, useMemo } from 'react';
import { Tabs, Row, Col, Button, Form, Input, Table, Space } from 'antd';
import JoditEditor from 'jodit-react';
const onChange = (key) => {
    console.log(key);
};

const EditText = () => {

    const editor = useRef(null)
    const [content, setContent] = useState('')
    const [temp, setTemp] = useState('')
    const [edditing, setEdditing] = useState()
    const edit_text = (value) => {
        setContent(value)
    }

    return (
        <Row justify={'center'} gutter={[0, 10]}>
            <Col span={24}>
                {edditing ? <>
                    <JoditEditor
                        ref={editor}
                        value={temp}
                        config={{
                            language: 'zh_tw',
                            i18n: {
                                zh_tw: {
                                    'Default': "預設",
                                    'Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.':
                                        'Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.',
                                    Anchor: 'Anchor',
                                    Margins: '外邊距（Margins）',
                                    top: 'top',
                                    right: 'right',
                                    bottom: 'bottom',
                                    left: 'left',
                                    Classes: 'Classes',
                                    Src: 'Src',
                                    Title: 'Title',
                                    Link: 'Link',
                                    file: 'file',
                                    'Image properties': '圖片屬性',
                                    'Your code is similar to HTML. Keep as HTML?':
                                        '你黏貼的文本是一段html代碼，是否保留源格式',
                                    'Paste as HTML': 'html黏貼',
                                    'Insert as Text': '把html代碼視為普通文本',
                                    'Error on load list': '加載list錯誤',
                                    Break: 'Pause',
                                    'No follow': 'No follow',
                                    ' URL': 'URL',
                                    Crop: 'Crop',
                                    Default: '默認',
                                    Circle: '圓圈',
                                    Dot: '點',
                                    Quadrate: '方形',
                                    Find: '搜尋',
                                    'Insert className': '插入班级名稱',
                                    'Press Alt for custom resizing': '按Alt自定義調整大小'
                                }
                            },
                            uploader: {
                                insertImageAsBase64URI: true,
                                imagesExtensions: [
                                    "jpg",
                                    "png",
                                    "jpeg",
                                    "gif",
                                    "svg",
                                    "webp",
                                ],
                            },
                        }}
                        tabIndex={1}
                        onBlur={newContent => edit_text(newContent)}
                    />
                </> : <>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </>}
            </Col>
            <Col>
                {edditing ? <>
                    <Space>
                        <Button onClick={() => { setEdditing(!edditing); setContent(temp) }} >取消</Button>
                        <Button onClick={() => { setEdditing(!edditing); }} >確認</Button>
                    </Space>
                </> : <>
                    <Button onClick={() => { setEdditing(!edditing); setTemp(content) }} >編輯</Button>
                </>}
            </Col>
        </Row>
    )
}

const App = (props) => {
    return (
        <>
            <div style={{ padding: '32px' }}>
                <Tabs
                    defaultActiveKey="1"
                    items={[
                        {
                            key: '1',
                            label: `Tab 1`,
                            children: <div style={{ padding: '32px' }}>
                                <EditText />
                            </div>,
                        },
                        {
                            key: '2',
                            label: `Tab 2`,
                            children: <div style={{ padding: '32px' }}>
                                {props.from}
                            </div>,
                        },
                        {
                            key: '3',
                            label: `Tab 3`,
                            children: <div style={{ padding: '32px' }}>
                                <Table />
                            </div>,
                        },
                    ]}
                    onChange={onChange} />
            </div>
        </>
    )
}

export default App