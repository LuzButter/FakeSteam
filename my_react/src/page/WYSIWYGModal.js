import { Row, Col, Button, Modal } from 'antd';
import React, { useRef } from 'react';
import JoditEditor from "jodit-react";
const WYSIWYGModal = (props) => {

    const editor = useRef(null);
    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/
        uploader: {
            insertImageAsBase64URI: true,
            // url: `${axios.defaults.baseURL}/api/literacy/admin/editor/file`
        },
        language: 'zh_tw'
    };
    const handleChange = (content) => {
        props.setData(content)
    }

    return (
        <>
            <Modal
                // width={'auto'}
                style={{ pointerEvents: 'auto' }}
                open={props.open}
                onOk={props.handleOk}
                bodyStyle={{ backgroundColor: '#FFFFFF' }}
                width={800}
                footer={false}
                className="modalStyle2"
                wrapClassName={"modalStyle2"}
                modalRender={(e) => <>
                    <div style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                        <Row gutter={[8, 16]}>
                            <Col span={24} >
                                <JoditEditor
                                    ref={editor}
                                    value={props.data}
                                    config={config}
                                    tabIndex={1} // tabIndex of textarea
                                    onBlur={handleChange} // preferred to use only this option to update the content for performance reasons
                                    height={500}
                                    allowResizeX={true}
                                    allowResizeY={true}
                                />
                            </Col>
                            <Col span={24}>
                                <Row gutter={[10, 10]} justify={"center"}>
                                    <Col>
                                        <Button size='large' style={{ background: '#4a4a4a', color: '#ffffff' }} onClick={(e) => props.setOpen(false)} block>取消</Button>
                                    </Col>
                                    <Col >
                                        <Button size='large'
                                            onClick={e => props.handleUpdate()}
                                            style={{ background: `#f09a45`, color: '#ffffff' }} block>更新</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </>}
            ></Modal>
        </>
    )
}
export default WYSIWYGModal;