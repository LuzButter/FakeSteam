import React, { useState } from "react";
import { ProTable } from '@ant-design/pro-components';
import { Button, Input, TimePicker } from "antd";

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖iuh',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const EditableTable = (props) => {

    const [edit, setEdit] = useState()

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: (index) => (
                <Editable type='input' edit={edit} defaultValue={index} />
            )
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            render: (index) => (
                <Editable type='input' edit={edit} defaultValue={index}/>
            )
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            render: (index) => (
                <Editable type='input' edit={edit} defaultValue={index}/>
            )
        },
    ];

    return (
        <>
            <Button onClick={() => setEdit(!edit)}>edit</Button>
            <ProTable dataSource={dataSource} columns={columns} />;
        </>
    )
}

const Editable = (props) => {

    return(<>
        {props.edit && <>
            {props.type === 'input' && <Input {...props}/>}
            {props.type === 'rangepicker' &&<TimePicker.RangePicker {...props}/>}
        </>}
        
        {!(props.edit) && <>{props.defaultValue}</>}
    </>
    )
}

export default EditableTable