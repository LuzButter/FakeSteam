import { ArrowRightOutlined } from "@ant-design/icons"
import { Button, Input } from "antd"

const ChatRoom = () => {

    return (
        <div style={{ height: '100vh', width: '100vw' }} >
            <div style={{ height: '100%', width: '100%', overflow: 'scroll' }} >
                <div
                    style={{
                        minHeight: '100%',
                        width: '100%',
                        padding: '1em 1em 8em 1em',
                        gap: '0.5em'
                    }} >
                    <ChatLine />
                    <ChatLine owner />
                    <ChatLine />
                    <ChatLine owner />
                </div>
                <div style={{ position: 'absolute', bottom: 0, width: '100%', }} >
                    <div
                        style={{
                            padding: '1em',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '1em',
                            maxWidth: '100%',
                            overflow: 'scroll',
                        }} >
                        <div
                            style={{
                                backgroundColor: 'rgba(237, 255, 237, 1)',
                                padding: '0.4em 1em',
                                borderRadius: '1.8em',
                                width: 'fit-content',
                                border: '1px solid rgba(181, 212, 148, 1)'
                            }} >
                            1ouhfgvlkfogh
                        </div>
                        <div
                            style={{
                                backgroundColor: 'rgba(237, 255, 237, 1)',
                                padding: '0.4em 1em',
                                borderRadius: '1.8em',
                                width: 'fit-content',
                                border: '1px solid rgba(181, 212, 148, 1)'
                            }} >
                            1ouhfgvlkfogh
                        </div>
                        <div
                            style={{
                                backgroundColor: 'rgba(237, 255, 237, 1)',
                                padding: '0.4em 1em',
                                borderRadius: '1.8em',
                                width: 'fit-content',
                                border: '1px solid rgba(181, 212, 148, 1)'
                            }} >
                            1ouhfgvlkfogh
                        </div>
                        <div
                            style={{
                                backgroundColor: 'rgba(237, 255, 237, 1)',
                                padding: '0.4em 1em',
                                borderRadius: '1.8em',
                                width: 'fit-content',
                                border: '1px solid rgba(181, 212, 148, 1)'
                            }} >
                            1ouhfgvlkfogh
                        </div>
                        <div
                            style={{
                                backgroundColor: 'rgba(237, 255, 237, 1)',
                                padding: '0.4em 1em',
                                borderRadius: '1.8em',
                                width: 'fit-content',
                                border: '1px solid rgba(181, 212, 148, 1)'
                            }} >
                            1ouhfgvlkfogh
                        </div>
                    </div>
                    <div
                        style={{
                            height: '4em',
                            backgroundColor: 'rgba(255, 253, 247, 1)',
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center',
                            gap: '1em',
                            border: '1px solid rgba(196, 178, 135, 0.43)'
                        }} >
                        <Input
                            style={{
                                borderRadius: '1.8em',
                                width: '80%',
                                padding: '0.4em 1em',
                            }} />
                        <Button
                            style={{
                                padding: 0,
                                height: '2.6em',
                                width: '2.6em',
                                borderRadius: '50%',
                            }} >
                            <ArrowRightOutlined />
                        </Button>
                    </div>
                </div>

            </div>
        </div>

    )
}

const ChatLine = ({ owner = false }) => {


    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: owner ? 'flex-end' : 'flex-start',
                gap: '0.5em'
            }} >
            <div
                style={{
                    width: '3em',
                    height: '3em',
                    minHeight: '3em',
                    minWidth: '3em',
                    borderRadius: '50%',
                    backgroundColor: '#ff6666',
                    backgroundImage: 'url(https://i.pinimg.com/564x/29/bb/8f/29bb8f83528d3cf2bbc81c2aaebe42cc.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    order: owner ? 3 : 1
                }}>
            </div>
            <div 
                style={{
                    order: 2,
                }}
            >
                <div
                    style={{
                        backgroundColor: owner? 'rgba(255, 230, 230, 1)':'rgba(237, 255, 237, 1)',
                        padding: '0.4em 1em',
                        borderRadius: '1.8em',
                        width: 'fit-content',
                        border: owner? '1px solid rgba(212, 148, 148, 1)':'1px solid rgba(181, 212, 148, 1)',
                        marginTop: '0.8em',
                        overflowWrap: 'anywhere',
                    }} >
                    1ouhfgvlkfogh ksdjfbhkjldfkdfljh kjldvklfjsa lkuhflkufhklasdfhklsjfdhkljsdfhskladjfhskladjfhfkldsjh
                </div>
                <div
                    style={{
                        backgroundColor: owner? 'rgba(255, 230, 230, 1)':'rgba(237, 255, 237, 1)',
                        padding: '0.4em 1em',
                        borderRadius: '1.8em',
                        width: 'fit-content',
                        border: owner? '1px solid rgba(212, 148, 148, 1)':'1px solid rgba(181, 212, 148, 1)',
                        marginTop: '0.8em',
                        overflowWrap: 'anywhere',
                    }} >
                    1ouhfgvlkfogh ksdjfbhkjldfkdfljh kjldvklfjsa lkuhflkufhklasdfhklsjfdhkljsdfhskladjfhskladjfhfkldsjh
                </div>
                
            </div>

            <div
                style={{
                    width: '3em',
                    minWidth: '3em',
                    order: owner ? 1 : 3
                }}>
            </div>
        </div>
    )
}

export default ChatRoom