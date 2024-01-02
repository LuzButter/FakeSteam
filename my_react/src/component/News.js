import { ArrowRightOutlined } from "@ant-design/icons"
import { Card, Col, List, Row, Space, Tabs } from "antd"

const News = () => {

    const item = [
        {
            label: `Tab 1`,
            key: 1,
            children: <NewsYear />,
        },
        {
            label: `Tab 2`,
            key: 2,
            children: <NewsYear />,
        },
        {
            label: `Tab 3`,
            key: 3,
            children: <NewsYear />,
        },
    ]

    return (
        <Tabs
            defaultActiveKey={1}
            centered
            items={item}
        />
    )
}

const NewsYear = () => {

    const item = [
        {
            label: `2023`,
            key: 1,
            children: <NewsList />,
        },
        {
            label: `2024`,
            key: 2,
            children: <NewsList />,
        },
        {
            label: `2025`,
            key: 3,
            children: <NewsList />,
        },
    ]

    return (
        <Tabs
            tabPosition='right'
            items={item}
        />
    )
}

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
];

const NewsList = () => (
    <List
        grid={{
            gutter: 32,
            column: 2,
        }}
        pagination={{
            position: 'bottom',
            align: 'end',
            pageSize: 6
        }}
        dataSource={data}
        renderItem={(item) => (
            <List.Item>
                <NewsCard item={item} />
            </List.Item>
        )}
    />
);

const NewsCard = ({ item }) => {

    return (
        <>
            <Row align={'middle'} wrap={false} gutter={16} style={{ borderBottom: 'solid lightgray', paddingBottom: '16px' }} >
                <Col>
                    <div style={{width: '6vw', height: '6vw', borderRadius: '50%', backgroundColor: 'gray', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Row direction="vertical" justify={'center'} align={'middle'} >
                            <Col span={24} style={{ textAlign: 'center', fontSize: '0.5em', lineHeight: '0.9em', color: 'white' }} >2023</Col> 
                            <Col span={24} style={{ textAlign: 'center', fontSize: '1.1em', lineHeight: '1.2em', color: 'white', fontWeight: '450' }} >8/21</Col>
                        </Row>
                    </div>
                </Col>
                <Col flex='auto'>
                    <span>{item.title}</span>
                </Col>
                <Col style={{cursor: 'pointer'}} >
                    <ArrowRightOutlined />
                </Col>
            </Row>
        </>
    )
}

export default News