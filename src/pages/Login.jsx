import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import logo from '../assets/images/tandem_logo.svg'
import './Login.css'
import { useAuth } from '../context/AuthProvider';





const Login = () => {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { login, user } = useAuth();

    function handleChange() {
        setError("")

    }


    const handleSubmit = async (e) => {

        try {
            setError("");
            setLoading(true);
            const {
                data: { user, session },
                error
            } = await login(e.email, e.password);
            // console.log(user);
            if (error) setError(error.message);
            // console.log(error);
            if (user && session) navigate("/");
        } catch (error) {
            setError("Email or Password Incorrect");
        }
        setLoading(false);


    }



    return (
        <div className='w-full min-h-screen h-full bg-gray-200 flex flex-col items-center justify-center font-Poppins'>
            <Link to={"/"}>
                <img className='absolute top-3 left-3' src={logo} alt="tandem_img" />
            </Link>

            <section className='font-Poppins w-full h-[calc(100vh-78px)] bg-gray-200 flex flex-col justify-center items-center'>
                <div className='bg-gray-100 w-[320px] tab:w-[368px] lap:w-[400px] pt-5 px-10 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={handleSubmit}
                    >
                        <h1 className='text-3xl lap:text-5xl font-bold mb-10 text-center'>Login</h1>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email or Number!',
                                },
                            ]}
                        >
                            <Input
                                onChange={handleChange}
                                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px] text-sm rounded-md px-3 w-60 tab:w-72 lap:w-80 m-auto h-10 placeholder:font-Poppins placeholder:tracking-wide'
                                prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your email or phone no." />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password
                                onChange={handleChange}
                                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px] text-sm rounded-md px-3 w-60 tab:w-72 lap:w-80 m-auto h-10 placeholder:font-Poppins placeholder:tracking-wide'
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item className=''>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Link className="login-form-forgot tab:ml-12 lap:ml-[80px]" to="/forgotpassword">
                                Forgot password ?
                            </Link>
                        </Form.Item>

                        {/* Error message */}
                        {
                            error && <Alert
                                className='w-60 tab:w-72 lap:w-80 mb-7 h-fit'
                                message={error}
                                type="error"
                                showIcon
                                closable
                                onClose={() => setError("")}
                            />

                        }

                        <Form.Item>
                            <Button htmlType="submit" className="login-form-button bg-[#15213A] hover:bg-[#1e3055] shadow-lg shadow-blue-900/70 hover:shadow-blue-900/40 text-gray-300 w-60 tab:w-72 lap:w-80 h-9 mx-auto rounded-md font-Poppins tracking-wide border border-1 border-[#15213A]">
                                Log in
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
                <div className='text-center text-sm mt-4'>
                    Don't have an account? <Link className='hover:text-blue-500 duration-500' to="/signup">Register here!</Link>
                </div>
            </section>
        </div>
    )
}

export default Login