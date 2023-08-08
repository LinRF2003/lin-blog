import React, {useState} from 'react';
import Request from "../../utils/Request";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [email,setEmail] = useState("12345678@qq.com");
    const [password,setPassword] = useState("12345678");

    // 修改邮箱
    const emailChangeHandler = (e)=>{
        setEmail(e.target.value)
    }
    // 修改密码
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    // 登录
    const login = async (e) => {
        e.preventDefault();
        let result = await Request("/login",{
            email,
            password
        })
        // 把 token 存入缓存中
        const tokenStartTime = Date.now();
        localStorage.setItem("token",result.token);
        localStorage.setItem("tokenStartTime",tokenStartTime);

        // 去到首页
        navigate("/");

        // console.log(email, password)
    }

    return (
        <div>
            <form onSubmit={login}>
                <input type="text" placeholder="请输入邮箱" onChange={emailChangeHandler} value={email} />
                <input type="text" placeholder="请输入密码" onChange={passwordChangeHandler} value={password} />

                <button>登录</button>
            </form>
        </div>
    );
};

export default Login;
