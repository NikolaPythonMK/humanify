import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './LoginForm.css';
import { login } from '@/services/AuthApi';
import { getRoutes } from '@/services/RoutesApi';

export default function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onFinish = (values: any) => {
        //console.log('Received values of form: ', values);
        login(values.username, values.password);
        //getRoutes();
      };

    return (

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >

          <div className='logo-container'>
            <img src='/logo.png'   alt='logo' width="300" height="150"/>
          </div>

          <h1>Login</h1>

          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input  className='login-input' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"
                 value={username} onChange={(e) => setUsername(e.target.value)}/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input className='login-input'
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
        
          <Form.Item className='remember-forgot'>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
    
            <a className="login-form-forgot" href="" >
              Forgot password
            </a>
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <span className='register-span'>Or <a href="">register now!</a></span>
          </Form.Item>
        </Form>
      );
}