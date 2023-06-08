import React from 'react'
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import logo from '../assets/images/tandem_logo.svg'
import { useAuth } from '../context/AuthProvider';
import { supabase } from '../supabase/business';






const ResetPassword = () => {


    const { updatePassword } = useAuth();
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        //e.preventDefault();
        // if (!e.Password || !e.confirm) {
        //   setErrorMsg("Please fill all the fields");
        //   return;
        // }
        // if (e.Password !== e.confirm) {
        //   setErrorMsg("Passwords doesn't match. Try again");
        //   return;
        // }
        try {
            setErrorMsg("");
            setLoading(true);
            const { data, error } = await updatePassword(e.password);
            if (!error) {
                const { data } = await supabase.auth.signOut();
                navigate("/");
            }
        } catch (error) {
            setErrorMsg("Error in Updating Password. Please try again");
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
                        onFinish={handleSubmit}
                        initialValues={{
                            remember: true,
                        }}

                    >
                        <h1 className='text-3xl lap:text-4xl font-bold mb-10 text-center'>Reset Password</h1>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-3 w-60 tab:w-72 lap:w-80 m-auto h-10 placeholder:font-Poppins placeholder:tracking-wide'
                                placeholder='New Password' />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-3 w-60 tab:w-72 lap:w-80 m-auto h-10 placeholder:font-Poppins placeholder:tracking-wide'
                                placeholder='Confirm New Password' />
                        </Form.Item>

                        {/* Error message */}
                        {
                            errorMsg && <Alert
                                className='w-60 tab:w-72 lap:w-80 mb-7 h-fit'
                                message={errorMsg}
                                type="error"
                                showIcon
                                closable
                                onClose={() => setErrorMsg("")}
                            />

                        }

                        <Form.Item className='flex justify-center items-center'>
                            <Button htmlType="submit" className="login-form-button bg-[#15213A] hover:bg-[#1e3055] shadow-lg shadow-blue-900/70 hover:shadow-blue-900/40 text-gray-300 w-40 h-9 mx-auto rounded-md font-Poppins tracking-wide border border-1 border-[#15213A]">
                                Reset
                            </Button>
                        </Form.Item>

                    </Form>
                </div>

            </section>
        </div>
    )
}

export default ResetPassword