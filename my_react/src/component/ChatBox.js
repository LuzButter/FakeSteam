import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Badge } from 'primereact/badge';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Popover } from 'antd';
import 'primeicons/primeicons.css';
import { CloseOutlined } from '@ant-design/icons';

const Expandable = styled.div`
.m-d.expand-list{
    margin: 0;
    padding: 0;
}
.m-d.expand-list > li{
    list-style-type: none;
    padding: 15px 0;
    border-bottom: 1px solid #212121;
    position: relative;
/*         max-width: 80%; */
}
.m-d label[class^="tab"]:hover{
    cursor: pointer;
}
.m-d input{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.m-d input[class^="tab"]{
    width: 80%;
    height: 40px;
    position: absolute;
    left: 0;
    top: 0; 
}
    .m-d input[class^="tab"]:hover{
        cursor: pointer;
    }
.m-d label[class^="tab"]{
    font-weight: bold;
}
.m-d .content{
    height: auto;
    max-height: 0;
    max-width: 300px;
/*        background: yellow;*/
    overflow: hidden;
    transform: translateY(20px);
    transition: all 180ms ease-in-out 0ms; 
}
.m-d li[data-md-content="100"] input[class^="tab"]:checked ~ .content{
    max-height: 100px;
    transition: all 150ms ease-in-out 0ms;
}
.m-d li[data-md-content="200"] input[class^="tab"]:checked ~ .content{
    max-height: 200px;
    transition: all 200ms ease-in-out 0ms;
}
.m-d li[data-md-content="300"] input[class^="tab"]:checked ~ .content{
    max-height: 300px;
    transition: all 250ms ease-in-out 0ms;
}
.m-d li[data-md-content="400"] input[class^="tab"]:checked ~ .content{
    max-height: 400px;
    transition: all 250ms ease-in-out 0ms;
}
.m-d li[data-md-content="500"] input[class^="tab"]:checked ~ .content{
    max-height: 500px;
    transition: all 250ms ease-in-out 0ms;
}
.m-d li[data-md-content="600"] input[class^="tab"]:checked ~ .content{
    max-height: 600px;
    transition: all 250ms ease-in-out 0ms;
}
.m-d li[data-md-content="700"] input[class^="tab"]:checked ~ .content{
    max-height: 700px;
    transition: all 300ms ease-in-out 0ms;
}
.m-d li[data-md-content="800"] input[class^="tab"]:checked ~ .content{
    max-height: 800px;
    transition: all 300ms ease-in-out 0ms;
}
.m-d li[data-md-content="900"] input[class^="tab"]:checked ~ .content{
    max-height: 900px;
    transition: all 300ms ease-in-out 0ms;
}
.m-d li[data-md-content="1000"] input[class^="tab"]:checked ~ .content{
    max-height: 1000px;
    transition: all 350ms ease-in-out 0ms;
}
    .m-d li[data-md-content=""] input[class^="tab"]:checked ~ .content{
    max-height: 1000px;
    transition: all 250ms ease-in-out 0ms;
}
.m-d input[class^="tab"]:checked ~ .content{
    margin-bottom: 20px;
}

.m-d .open-close-icon{
    display: inline-block;
    position: absolute;
    right: 20px;
    transform: translatey(2px);
}
.m-d .open-close-icon i{
    position: absolute;
    left: 0;
}
.m-d .open-close-icon .fa-minus{
    transform:rotate(-90deg);
    transition: transform 150ms ease-in-out 0ms;
}
.m-d input[class^="tab"]:checked ~ .open-close-icon .fa-minus{
    transform: rotate(0deg);
    transition: transform 150ms ease-in-out 0ms;
}
.m-d .open-close-icon .fa-plus{
    opacity: 1;
    transform:rotate(-90deg);
    transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;
}
.m-d input[class^="tab"]:checked ~ .open-close-icon .fa-plus{
    opacity: 0;
    transform: rotate(0deg);
    transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms; 
}
*{
line-height: 1.4;
font-family: "harmonia sans", roboto, arial;
}
`

const FloatItem = styled.div`
box-sizing: border-box;
margin: 0;
padding: 0;
color: rgba(0, 0, 0, 0.88);
font-size: 14px;
line-height: 1.5714285714285714;
border: none;
position: fixed;
cursor: pointer;
z-index: 99;
display: block;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
inset-inline-end: 24px;
inset-block-end: 48px;
`
const RoundButton = styled.button`
width: 40px;
height: 40px;
border-radius: 50%;
border: 1px solid gray;
background-color: #fff;
box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);

:active{
background-color: rgb(239 239 239);
border: 1px solid gray;
}
`
// const ChatBox = styled.div`
// width: 100%;
// height: 5em;
// margin: 8px 0px;
// border: 1px solid black;
// overflow: hidden;
// cursor: pointer;
// `

var Item = [
    {
        id: 1,
        title: 'on sale!!!',
        content: 'bro, stuff here are cheat as frick!!bro, stuff here are cheat as frick!!bro, stuff here are cheat as frick!!bro, stuff here are cheat as frick!!bro, stuff here are cheat as frick!!bro, stuff here are cheat as frick!!bro, stuff here are cheat as frick!!bro, stuff here are cheat as frick!!bro, stuff here are cheat as frick!!bro, stuff here are cheat as frick!!'
    },
    {
        id: 2,
        title: <div style={{fontWeight: '600'}} >on sale!!!</div>,
        content: 'bro, stuff here are cheat as frick!!'
    },
    {
        id: 3,
        title: 'on sale!!!',
        content: 'bro, stuff here are cheat as frick!!'
    },
    {
        id: 3,
        title: 'on sale!!!',
        content: 'bro, stuff here are cheat as frick!!'
    },
    {
        id: 3,
        title: 'on sale!!!',
        content: 'bro, stuff here are cheat as frick!!'
    },
    {
        id: 3,
        title: 'on sale!!!',
        content: 'bro, stuff here are cheat as frick!!'
    },
    {
        id: 3,
        title: 'on sale!!!',
        content: 'bro, stuff here are cheat as frick!!'
    },
    {
        id: 3,
        title: 'on sale!!!',
        content: 'bro, stuff here are cheat as frick!!'
    },
]

const ChatButton = ({ChatItem=Item}) => {

    const [model, setModel] = useState(false)

    const ClickEvent = (e) => {
        setModel(!model)
    }

    return (
        <>
            <FloatItem>
                <Popover placement="topRight" content={<ChatMenu item={ChatItem} />} trigger="click">
                    <RoundButton onClick={(e) => ClickEvent(e)} className='p-overlay-badge' >
                        <i className='pi pi-bell' />
                        <Badge value={ChatItem.length} severity="danger" ></Badge>
                    </RoundButton>
                </Popover>
            </FloatItem>
        </>
    )
}

const ChatMenu = ({ item }) => {

    // const [box, setBox] = useState(false)
    // const ClickEvent = () => {
    //     setBox(!box)

    // }

    return (
        <>
            <Expandable style={{ width: '20vw', height: '50vh', overflowX: 'hidden', overflow: 'scroll' }} >
                {/* {
                    item.map((i) => {
                        return (
                            <ChatBox onClick={() => ClickEvent()} >
                                <div style={{ padding: '0px 6px', width: '100%', fontWeight: '500' }} >
                                    {i.title}
                                </div>
                                <div style={{ padding: '0px 6px', width: '100%', color: 'gray' }} >
                                    {i.content}
                                </div>
                            </ChatBox>
                        )
                    })
                } */}
                <ul class="m-d expand-list">
                    {
                        item.map((i) => {
                            return (
                                <li data-md-content="300" style={{backgroundColor: '#fff', margin: '0.5em 0', padding: '0.5em 0 1em 0'}} >
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                        <label name="tab" for="tab2" tabindex="-1" role="tab">{i.title}</label>
                                        <div style={{ width: '20%', textAlign: 'end' }} >
                                            <CloseOutlined style={{}} />
                                        </div>
                                    </div>

                                    <input type="checkbox" class="tab" id="tab2" tabindex="0" />

                                    <div class="content">
                                        {i.content}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

            </Expandable>
        </>
    )
}
export default ChatButton;