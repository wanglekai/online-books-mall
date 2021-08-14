import React from 'react';
import Layout from "./Layout";
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/actions/signup';

function Signup () {
  const dispath = useDispatch()
  const handleOnFinish = values => {
    console.log(values)
    dispath(signup(values))
  }
  return (
    <Layout title="注册" subTitle="">
      <Form onFinish={handleOnFinish}>
        <Form.Item name="name" label="昵称">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}
export default Signup;