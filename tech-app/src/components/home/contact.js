import { Button, Checkbox, Form, Input } from "antd";

const { TextArea } = Input;

function Contact() {
    // const onFinish = (values: any) => {
    //     console.log('Received values of form: ', values);
    //   };
    return (
        <div id="contact" className='block contactBlock'>
            <div className='container-fluid'>
                <div className="titleHolder">
                        <h2>Get in Touch</h2>
                        <p>Suspendisse et maximus mauris  fermentum, odio at convallis iaculis</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    
                >
                    <Form.Item
                      name="fullname"
                      rules={[{ required: true, message: 'Please input your Fullname!' }]}
                    >
                      <Input placeholder="Fullname" />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                      <Input
                        
                        type="email"
                        placeholder="Email Adress"
                      />
                    </Form.Item>
                    <Form.Item
                      name="telephone"                    >
                      <Input placeholder="Telephone" />
                    </Form.Item>                    
                    <Form.Item
                      name="subject"
                    >
                      <Input placeholder="Subject" />
                    </Form.Item>
                    <Form.Item
                      name="subject"
                    >
                      <TextArea placeholder="Subject" />
                    </Form.Item>

                    <Form.Item
                      name="agreement"
                      valuePropName="checked"
                      rules={[
                        {
                          validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                      ]}
                    >
                      <Checkbox>
                        I agree with terms and conditions.
                      </Checkbox>
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        Submit
                      </Button>
                      
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Contact;