import React from 'react';
import {useEffect, useState} from "react";

const RightBox = (props) => {
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        // 监听滚动的函数
        const scrollHandler = (e) => {
            if (document.documentElement.scrollTop > 70) {
                setIsFixed(true)
            } else {
                setIsFixed(false)
            }
        }

        window.addEventListener("scroll", scrollHandler)
        return () => {
            // 关闭监听函数
            window.removeEventListener("scroll", scrollHandler)
        }
    }, []);
    return (
        <div>
            <div style={isFixed ? {
                width: "350px",
                flex: "1",
                position: "fixed",
                top: "10px",
            } : {width: "350px"}}
            >
                {props.children}
            </div>
        </div>
    );
};

export default RightBox;
