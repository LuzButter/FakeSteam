import { CloseOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, Typography } from 'antd';
const App = () => {
    const [form] = Form.useForm();
    return (
        <Form
            labelCol={{
                span: 6,
            }}
            wrapperCol={{
                span: 18,
            }}
            form={form}
            name="dynamic_form_complex"
            style={{
                maxWidth: 600,
            }}
            autoComplete="off"
            initialValues={{
                items: [{}],
            }}
        >
            <Form.Item label="List">
                <Form.List name={['list']}>
                    {(subFields, subOpt) => (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: 16,
                            }}
                        >
                            {subFields.map((subField) => (
                                <Space key={subField.key}>
                                    <Form.Item noStyle name={[subField.name, 'first']}>
                                        <Input placeholder="first" />
                                    </Form.Item>
                                    <Form.Item noStyle name={[subField.name, 'second']}>
                                        <Input placeholder="second" />
                                    </Form.Item>
                                    <CloseOutlined
                                        onClick={() => {
                                            subOpt.remove(subField.name);
                                        }}
                                    />
                                </Space>
                            ))}
                            <Button type="dashed" onClick={() => subOpt.add()} block>
                                + Add Sub Item
                            </Button>
                        </div>
                    )}
                </Form.List>
            </Form.Item>

            <Form.Item noStyle shouldUpdate>
                {() => (
                    <Typography>
                        <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
                    </Typography>
                )}
            </Form.Item>
        </Form>
    );
};
export default App;