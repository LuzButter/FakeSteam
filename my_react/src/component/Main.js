import React, { useState } from 'react';
import { Row, Col, Space, Tree, Typography, Input, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Paragraph } = Typography;

const TreeComponent = () => {

    const [editNodeName, setEditNodeName] = useState('')
    const [creatNodeName, setCreatNodeName] = useState('')

    const [treeData, setTreeData] = useState([
        {
            id: 1,
            title: 'Node 1',
            children: [
                {
                    id: 11,
                    parentid: 1,
                    title: 'Node 1.1',
                    children: []
                },
                {
                    id: 12,
                    parentid: 1,
                    title: 'Node 1.2',
                    children: []
                }
            ]
        },
        {
            id: 2,
            title: 'Node 2',
            children: []
        }
    ]);

    const handleCreateNode = (parentId) => {
        const newNode = {
            id: Math.random(),
            parentid: parentId,
            title: 'New Node',
            children: []
        };

        const updatedTreeData = treeData.map(node => {
            if (node.id === parentId) {
                return {
                    ...node,
                    children: [...node.children, newNode]
                };
            }
            return node;
        });

        setTreeData(updatedTreeData);
    };

    const handleUpdateNode = (nodeId, newtitle) => {
        const updatedTreeData = treeData.map(node => {
            if (node.id === nodeId) {
                return {
                    ...node,
                    title: newtitle
                };
            }
            return node;
        });

        setTreeData(updatedTreeData);
    };

    const handleDeleteNode = (nodeId, parentId) => {
        const updatedTreeData = (data) => {
        if(parentId !== null){
                console.log('Delete')
                const temp = data.filter(data => data.id !== nodeId)
                return temp
        }
        else{

        }
    }
            
            
        setTreeData(updatedTreeData(treeData));
    };

    const creatRootElement = (title) => {
        const newNode = {
            id: title,
            title: title,
            children: []
        };

        const updatedTreeData = () => {
            console.log('creat new element')
            const temp = [...treeData, newNode]
            return temp
        }

        setTreeData(updatedTreeData)
    }
    
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '100px' }}>
            <Space.Compact>
                <Input onChange={(e) => setCreatNodeName(e.target.value)} style={{ width: '200px' }} />
                <Button onClick={() => creatRootElement(creatNodeName)}>Add Child</Button>
            </Space.Compact>
            <Tree
                showLine
                switcherIcon={<DownOutlined />}
                rootStyle={{ padding: '5px' }}
                titleRender={
                    node => (<Space style={{ padding: '5px' }}>
                        <Typography.Text
                            editable={{
                                onChange: setEditNodeName,
                                onEnd: () => handleUpdateNode(node.id, editNodeName)
                            }}>
                            {node.title}
                        </Typography.Text>
                        <Button onClick={() => handleCreateNode(node.id)}>Add Child</Button>
                        <Button onClick={() => handleDeleteNode(node.id, node.parentid)}>Delete</Button>
                        <Button onClick={() => console.log(node.title, node.id)}>info</Button></Space>)
                }
                treeData={treeData}
            />
        </div>
    );
};

export default TreeComponent;
