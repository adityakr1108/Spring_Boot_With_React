import Container from './container';
import {Avatar, Button, Modal,Form, Input, Select, Space} from 'antd';
import './footer.css';
import { useState } from 'react';


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

const Footer = (props) => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    
    const showModal = () => {
        setIsModelOpen(true);
    }
    
    const handleOk = () => {
        setIsModelOpen(false);
    }
    const onCancel = () =>{
        setIsModelOpen(false);
    }
    const [form] = Form.useForm();
    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({ note: 'Hi, man!' });
                break;
            case 'female':
                form.setFieldsValue({ note: 'Hi, lady!' });
                break;
            case 'other':
                form.setFieldsValue({ note: 'Hi there!' });
                break;
            default:
            }
        };
            const onFinish = values => {
                console.log(values);
            };
            const onReset = () => {
                form.resetFields();
            };
            const onFill = () => {
                form.setFieldsValue({ firstName: 'Georgia', lastName: "Gaolin",email:'georgia.gaon@abc.com', gender: 'male' });
            };

    return (
        <div className="footer">
            <Container>
                {props.numberOfStudents ?
                 <Avatar style={{ backgroundColor: '#f56a00', marginRight: '5px' }} size='large'>
                    {props.numberOfStudents}
                </Avatar> :
                null}
                
                <Button type='primary' onClick={showModal}>Add a new student +</Button>
                <Modal
                    title="Add a new student"
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModelOpen}
                    onOk={handleOk}
                    onCancel={onCancel}
                    // width={500}
                >
                <Form
                    {...layout}
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                    >
                    <Form.Item name ="firstName" label="First Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name ="lastName" label="Last Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name ="email" label="Email" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                        <Select
                            allowClear
                            placeholder="Select a option and change input text above"
                            onChange={onGenderChange}
                            options={[
                                { label: 'Male', value: 'Male' },
                                { label: 'Female', value: 'Female' },
                            ]}
                        />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Space>
                        <Button type="primary" htmlType="submit" onClick={() => setIsModelOpen(false)}>
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                        <Button type="link" htmlType="button" onClick={onFill}>
                            Example
                        </Button>
                        </Space>
                    </Form.Item>

                </Form>
                </Modal>
            </Container>
        </div>
    );
}
export default Footer;