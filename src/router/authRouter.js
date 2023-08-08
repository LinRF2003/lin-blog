import React from 'react';
import {Navigate} from "react-router-dom";

const AuthRouter = (props) => {
    // 判断是否登录
    // 判断token存在且时间少于7天
    const token = localStorage.getItem("token");
    const tokenStartTime = localStorage.getItem("tokenStartTime");
    const expirationTime = 24 * 60 * 60 * 1000 * 7;
    let isLogin;
    if(token || Date.now() - parseInt(tokenStartTime) < expirationTime){
        isLogin = true;
    }else{
        isLogin = false;
    }
    return (
        <>
            {isLogin ?
            props.children : <Navigate to="/login"/>}
        </>
    );
};

export default AuthRouter;
