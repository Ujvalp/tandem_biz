import React from 'react'
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useAuth } from '../context/AuthProvider';
import logo from '../assets/images/tandem_logo.svg'
import { supabase } from '../supabase/business';






const ForgotPassword = () => {

    // const [error, setError] = useState("");

    const { passwordReset } = useAuth();
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");

    function handleChange() {
        setError("")
        setMsg("");
    }

    const handleSubmit = async (e) => {
        // e.preventDefault();
        const { data, error } = await supabase.from("biz_user_db").select().eq("biz_email", e.email)
        if (data.length == 0) {
            // console.log(error);
            setError("User Not Found")

        } else if (data) {
            // console.log(data);
            try {
                setLoading(true);
                const { error } = await passwordReset(e.email);
                if (!error) {
                    setMsg("Password reset has been sent to your email");
                } else {
                    console.log(error);
                    setError(error.message)
                }
            } catch (e) {
                console.error(e);
            }

        }



        setLoading(false);
    };




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
                        <h1 className='text-3xl lap:text-4xl font-bold mb-10 text-center'>Forgot Password</h1>
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
                                placeholder="Enter your email or phone no." />
                        </Form.Item>

                        {/* Error message */}
                        {
                            msg && <Alert
                                className='w-60 tab:w-72 lap:w-80 mb-7 h-fit'
                                message={msg}
                                type="success"
                                showIcon
                                closable
                                onClose={() => setMsg("")}
                            />

                        } {
                            error && <Alert
                                className='w-60 tab:w-72 lap:w-80 mb-7 h-fit'
                                message={error}
                                type="error"
                                showIcon
                                closable
                                onClose={() => setError("")}
                            />

                        }

                        <Form.Item className='flex justify-center items-center'>
                            <Button htmlType="submit" className="login-form-button bg-[#15213A] hover:bg-[#1e3055] shadow-lg shadow-blue-900/70 hover:shadow-blue-900/40 text-gray-300 w-40 h-9 mx-auto rounded-md font-Poppins tracking-wide border border-1 border-[#15213A]">
                                Get reset link
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

export default ForgotPassword