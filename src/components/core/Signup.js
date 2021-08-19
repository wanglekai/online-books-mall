import React from 'react';
import Layout from "./Layout";
import { Form, Input, Button, Spin, Result } from 'antd';
import { useDispatch } from 'react-redux';
import { signup, signup_reset } from '../../store/actions/signup';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Signup () {
  const dispath = useDispatch()

  // 获取状态
  const { loading, loaded, success, message } = useSelector(state => state.signup)

  let isShow = true

  // 提交表单
  const handleOnFinish = values => {
    dispath(signup(values))
  }

  // 获取表单实例对象
  const [ form ] = Form.useForm()

  // 正在发送注册请求， 显示loading
  const showLoading = () => {
    if (loading) return <Spin />
  }
  // 注册成功，清空表单
  useEffect(() => {
    if (loaded && success) {
      // console.log('注册成功');
      // Form.useForm().rese
      form.resetFields()
    }
    // console.log(loaded, success);
  },[loaded, success])

  // 注册成功，显示成功提示信息
  const showSuccess = () => {
    if (loaded && success) {
      return (
        <Result
          status="success"
          title="注册成功"
          extra={[
            <Button type="primary" key="console">
              <Link to="/signin">立即登录</Link>
            </Button>
          ]} />
      )
    }
  }
  // 注册失败，显示失败提示信息
  const showError = () => {
    if (loaded && !success) {
      return (
        <Result
          status="error"
          title="错误"
          subTitle={message} />
      )
    }
  }
  // 离开页面，重置注册状态
  useEffect(() => {
    return () => {
      dispath(signup_reset())
    }
  }, [])

  // 注册表单
  const signupForm = () => {
    return (
      <Form form={form} onFinish={handleOnFinish}>
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
    )
  }

  return (
    <Layout title="注册" subTitle="">
      {showLoading()}
      {showSuccess()}
      {showError()}
      {signupForm()}
    </Layout>
  )
}
export default Signup;