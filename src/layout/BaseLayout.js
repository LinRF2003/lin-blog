import React, {useState} from 'react';
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import BaseLayoutClasses from "./BaseLayout.module.scss"
import {Dropdown, Input, Space,message} from 'antd';
import {DownOutlined} from "@ant-design/icons";
import {darkTheme, lightTheme} from "../utils/theme";

const {Search} = Input;
// 其他项目列表
const projectList = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://159.75.169.144">
                博客论坛 (vue2 + node)
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://159.75.169.144:3300">
                电商项目 (uniapp + node) 移动端
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://gitee.com/lrf2673760057/music">
                h5音乐 (vue3)
            </a>
        ),
    },
    {
        key: '4',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://gitee.com/lrf2673760057/wx-music">
                仿网易云音乐(微信小程序)
            </a>
        ),
    },
    {
        key: '5',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://gitee.com/lrf2673760057">
                其他项目
            </a>
        ),
    }
];

const BaseLayout = () => {

    // 获取当前路径
    const {pathname: currentPath} = useLocation();
    const [currentThemeColor, setCurrentThemeColor] = useState("light");

    // 导航参数
    const navList = [
        {
            path: "/blog",
            name: "首页"
        },
        {
            path: "/category",
            name: "分类"
        },
        // {
        //     path: "/UserCenter",
        //     name: "个人介绍"
        // },
    ]


    const navigate = useNavigate();
    // 搜索函数
    const onSearch = (value) => {
        if(value.trim()===''){
           return  message.warning("搜索内容不能为空")
        }
       // 跳转路由
        navigate(`/search?text=${value}`)
    }

    // 切换主题
    const changeTheme = () => {
        let themeList;
        if (currentThemeColor === 'light') {
            themeList = darkTheme
            setCurrentThemeColor('dark');
        } else {
            themeList = lightTheme
            setCurrentThemeColor('light')
        }
        for (const element in themeList) {
            document.documentElement.style.setProperty(element, themeList[element]);
        }
    }

    return (
        <div className={BaseLayoutClasses.baseLayout}>
            <header className={BaseLayoutClasses.header}>
                <div className={BaseLayoutClasses.headerBox}>
                    <div className={BaseLayoutClasses.logo}>
                        Lin-blog
                    </div>
                    <div className={BaseLayoutClasses.navBox}>
                        {navList.map((item) =>
                            <Link to={item.path}
                                  className={`${currentPath.indexOf(item.path) !== -1 ? BaseLayoutClasses.active : ""} ${BaseLayoutClasses.navItem}`
                                  } key={item.name}>{item.name}</Link>
                        )}
                        <div className={BaseLayoutClasses.divider}/>
                        <Dropdown menu={{items:projectList,}}>
                            <a onClick={(e) => e.preventDefault()} className={BaseLayoutClasses.project}>
                                <Space>
                                    其他项目
                                    <DownOutlined/>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <button onClick={changeTheme}>切换主题</button>
                    <div className={BaseLayoutClasses.searchInputBox}>
                        {currentPath.indexOf("/search") === -1 ? <Search placeholder="请输入搜索内容" onSearch={onSearch} enterButton/> : ""}
                    </div>
                </div>
            </header>

            {/* 路由引入位置 */}
            <div className={BaseLayoutClasses.outlet}><Outlet/></div>

        </div>
    );
};

export default BaseLayout;
