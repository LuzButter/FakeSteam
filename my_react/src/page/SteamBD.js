import { Row, Col, ConfigProvider, Button, Space, Tabs, Table } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import Slider from "react-slick";
import ProductCard from '../component/ProductCard'
// import WordCloud from '../component/Chart/WordCloud'
import ReactWordcloud from 'react-wordcloud';
import Controller from '../pic/Controller.png'
import data from '../data/GameData.json'
import { useNavigate } from "react-router-dom";
import BarChart from '../component/Chart/BarChart'
import SteamGameRev from '../data/SteamGameRev.json'


const Banner = ({ src, text, buttonText, height = '50vh' }) => {

    return (
        <div style={{ height: height, backgroundImage: src, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ color: '#ffffff', marginBottom: '16px' }} >{text}</div>
            <Button style={{ backgroundColor: '#00000033', color: '#ffffff' }}>{buttonText}</Button>
        </div>
    )
}

const SteamDB = () => {

    const navigate = useNavigate();

    var DayPeak = data.slice(0, 100).map(function (item) {
        return {
            "text": item.name,
            "value": item.DayPeak
        };
    });
    var playersRightNow = data.slice(0, 100).map(function (item) {
        return {
            "text": item.name,
            "value": item.playersRightNow
        };
    });
    var allTimePeak = data.slice(0, 100).map(function (item) {
        return {
            "text": item.name,
            "value": item.allTimePeak
        };
    });
    var Rev = SteamGameRev.slice(0, 50).map(function (item) {
        return {
            "id": item.id,
            "name": item.Title,
            "uv": parseInt(item.RevenueCurrentHigh.replace(/[^\d]/g, ''), 10)
        };
    });
    var maxDayPeak = data.reduce(function (max, current) {
        return (max.DayPeak > current.DayPeak) ? max : current;
    }, data[0]);
    var maxplayersRightNow = data.reduce(function (max, current) {
        return (max.playersRightNow > current.playersRightNow) ? max : current;
    }, data[0]);
    var maxallTimePeak = data.reduce(function (max, current) {
        return (max.allTimePeak > current.allTimePeak) ? max : current;
    }, data[0]);

    const callbacks = {
        // getWordColor: word => word.value > 50 ? "blue" : "red",

        onWordClick: console.log,
        onWordMouseOver: console.log,
        getWordTooltip: word => `${word.text} (${word.DayPeak}) [${word.DayPeak > 50 ? "good" : "bad"}]`,
    }

    const options = {
        enableTooltip: false,
        rotations: 0,
        fontSizes: [12, 64],
        padding: 1,
        colors: ["#FF17A1", "#FF3B6B", "#FF7233", "#FF8100", "#FF9800", '#6A9BCC', '#9EFFFC', '#CC706A'],

    };

    const size = [1200, 400];

    const bannerItem = [
        // {
        //     id: 1,
        //     item:
        //         <Banner
        //             src={'url(https://i.pinimg.com/564x/87/7f/65/877f65df18604d6741a68dcb580e160c.jpg)'}
        //             text={'簡介'}
        //             buttonText={'關於我們'}
        //             height={'400px'}
        //         />
        // },
        {
            id: 2,
            item:
                <div style={{ maxWidth: '1200px', height: '400px' }} >
                    <div style={{ backgroundColor: '#364157', textAlign: 'center', fontSize: '1.6em', padding: '0.2em' }} >即時人氣文字雲</div>
                    <div style={{ margin: '20px 10px' }} >
                        <ReactWordcloud
                            callbacks={callbacks}
                            options={options}
                            // size={size}
                            words={playersRightNow}
                        />
                    </div>
                </div>
        },
        {
            id: 3,
            item:
                <div style={{ maxWidth: '1200px', height: '400px' }} >
                    <div style={{ backgroundColor: '#364157', textAlign: 'center', fontSize: '1.6em', padding: '0.2em' }} >24h人氣文字雲</div>
                    <div style={{ margin: '20px 10px' }} >
                        <ReactWordcloud
                            callbacks={callbacks}
                            options={options}
                            // size={size}
                            words={DayPeak}
                        />
                    </div>
                </div>
        },
        {
            id: 4,
            item:
                <div style={{ maxWidth: '1200px', height: '400px' }} >
                    <div style={{ backgroundColor: '#364157', textAlign: 'center', fontSize: '1.6em', padding: '0.2em' }} >6個月內人氣文字雲</div>
                    <div style={{ margin: '20px 10px' }} >
                        <ReactWordcloud
                            callbacks={callbacks}
                            options={options}
                            // size={size}
                            words={allTimePeak}
                        />
                    </div>
                </div>
        },

    ]

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 6000,
        dots: false,
    }

    const columnsPRN = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'playersRightNow',
            dataIndex: 'playersRightNow',
            key: 'playersRightNow',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.playersRightNow - b.playersRightNow,
        },
    ];

    const columns24 = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'DayPeak',
            dataIndex: 'DayPeak',
            key: 'DayPeak',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.DayPeak - b.DayPeak,
        },
    ];

    const columnsAT = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'allTimePeak',
            dataIndex: 'allTimePeak',
            key: 'allTimePeak',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.allTimePeak - b.allTimePeak,
        },
    ];

    const tabItem = [
        {
            label: `即時上線人數`,
            key: 1,
            children: <div>
                <Table dataSource={data} columns={columnsPRN} showHeader={false}  />
            </div>,
        },
        {
            label: `24h在線人數最多`,
            key: 2,
            children: <div>
                <Table dataSource={data} columns={columns24} showHeader={false} />
            </div>,
        },
        {
            label: `6個月內在線人數最多`,
            key: 3,
            children: <div style={{width: '100%', height: '70vh'}} >
                <BarChart data={Rev} />
            </div>,
        },
    ]

    return (
        <div style={{ backgroundColor: '#1e2837', minHeight: '100vh', color: '#c5c3c0' }} >
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#b3cee2',
                        colorInfo: '#b3cee2',
                        colorSuccess: '#c8ed4e',
                        // fontSize: '16',
                        borderRadius: '4',
                        colorBgBase: '#1e2837',
                        colorTextBase: "#c5c3c0"
                    }
                }}
            >
                <Row justify={'center'} gutter={[0, 32]} style={{ maxWidth: '1000px', marginRight: 'auto', marginLeft: 'auto' }} >
                    <Col span={24} >
                        <Row align={'middle'} style={{ minHeight: '20vh', }} >
                            <Col flex={'none'} >
                                <img src={Controller} style={{ height: '16vh' }} />
                            </Col>
                            <Col flex={'auto'}  >
                                <Space>
                                    <Button type='link' onClick={() => navigate("/GameInfo")} style={{ fontSize: '1.2em', fontWeight: '500', padding: '0 0.5em' }} >首頁</Button>
                                    <Button type='link' onClick={() => navigate("/GameInfo")} style={{ fontSize: '1.2em', fontWeight: '500', padding: '0 0.5em' }} >排行</Button>
                                    <Button type='link' onClick={() => navigate("/GameInfo")} style={{ fontSize: '1.2em', fontWeight: '500', padding: '0 0.5em' }} >圖表</Button>
                                </Space>
                            </Col>
                            <Col flex={'none'} >
                                <Button type='link' onClick={() => navigate("/GameInfo")} >繁 | EN</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Slider {...settings} arrows={false} >
                            {bannerItem.map((e) => {
                                console.log(e)
                                return (e.item)
                            }
                            )}
                        </Slider>
                    </Col>
                    <Col span={24} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: '#364157' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', width: 'fit-content', margin: '2em', }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', }} >
                                <span style={{ fontSize: '1.4em', fontWeight: '300' }} >當下在線人數最多</span>
                                <ProductCard item={{
                                    img: 'https://imagecdn.gamerhaul.com/q:l/r:0/wp:1/w:1/u:https://www.gamerhaul.com/wp-content/uploads/2023/04/Counter-Strike-2-Logo.jpg',
                                    title: maxplayersRightNow.name,
                                    before: '',
                                    after: '1000',
                                }} />
                            </div>
                            <Button type='link' onClick={() => navigate("/GameInfo")} >看更多<RightOutlined /></Button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', width: 'fit-content', margin: '2em', }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', }} >
                                <span style={{ fontSize: '1.4em', fontWeight: '300' }} >24h在線人數最多</span>
                                <ProductCard item={{
                                    img: 'https://imagecdn.gamerhaul.com/q:l/r:0/wp:1/w:1/u:https://www.gamerhaul.com/wp-content/uploads/2023/04/Counter-Strike-2-Logo.jpg',
                                    title: maxDayPeak.name,
                                    before: '',
                                    after: '1000',
                                }} />
                            </div>
                            <Button type='link' onClick={() => navigate("/GameInfo")} >看更多<RightOutlined /></Button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', width: 'fit-content', margin: '2em', }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', }} >
                                <span style={{ fontSize: '1.4em', fontWeight: '300' }} >6個月內在線人數最多</span>
                                <ProductCard item={{
                                    img: 'https://www.edigitalagency.com.au/wp-content/uploads/pubg-battlegrounds-logo-white-png.png',
                                    title: maxallTimePeak.name,
                                    before: '',
                                    after: '1000',
                                }} />
                            </div>
                            <Button type='link' onClick={() => navigate("/GameInfo")} >看更多<RightOutlined /></Button>
                        </div>
                    </Col>
                    {/* <Col>
                        <ReactWordcloud
                            callbacks={callbacks}
                            options={options}
                            // size={size}
                            words={DayPeak}
                        />
                    </Col> */}
                    <Col span={24} >
                        <Tabs
                            defaultActiveKey="1"
                            centered
                            items={tabItem}
                        />
                    </Col>
                </Row>
            </ConfigProvider>

        </div>
    )
}

export default SteamDB