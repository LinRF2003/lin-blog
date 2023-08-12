import React, {useState} from 'react';
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import BaseLayoutClasses from "./BaseLayout.module.scss"
import {Dropdown, Input, Space, message, FloatButton} from 'antd';
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
        {
            path: "/UserCenter",
            name: "个人介绍"
        },
    ]


    const navigate = useNavigate();
    // 搜索函数
    const onSearch = (value) => {
        if (value.trim() === '') {
            return message.warning("搜索内容不能为空")
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
                        <Dropdown menu={{items: projectList,}}>
                            <a onClick={(e) => e.preventDefault()} className={BaseLayoutClasses.project}>
                                <Space>
                                    其他项目
                                    <DownOutlined/>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <div className={BaseLayoutClasses.themeButton} onClick={changeTheme}>
                        {currentThemeColor === "light" ?
                            <svg t="1691746440624" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="3321" width="200" height="200">
                                <path
                                    d="M512 704c54.656-1.344 100.032-20.032 136-56S702.656 566.72 704 512c-1.344-54.656-20.032-100.032-56-136S566.72 321.344 512 320c-54.656 1.344-100.032 20.032-136 56S321.344 457.28 320 512c1.344 54.656 20.032 100.032 56 136S457.28 702.656 512 704z m0 64c-72.64-1.984-132.992-27.008-180.992-75.008S258.048 584.64 256 512c1.984-72.64 27.008-132.992 75.008-180.992S439.36 258.048 512 256c72.64 1.984 132.992 27.008 180.992 75.008S765.952 439.36 768 512c-1.984 72.64-27.008 132.992-75.008 180.992S584.64 765.952 512 768zM512 64c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04v64a31.168 31.168 0 0 1-8.96 23.04A31.168 31.168 0 0 1 512 192a31.168 31.168 0 0 1-23.04-8.96 31.168 31.168 0 0 1-8.96-23.04v-64c0-9.344 3.008-17.024 8.96-23.04A31.168 31.168 0 0 1 512 64z m0 768c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04v64a31.168 31.168 0 0 1-8.96 23.04A31.168 31.168 0 0 1 512 960a31.168 31.168 0 0 1-23.04-8.96 31.168 31.168 0 0 1-8.96-23.04v-64c0-9.344 3.008-17.024 8.96-23.04A31.168 31.168 0 0 1 512 832zM195.008 195.008a33.408 33.408 0 0 1 23.04-8.96c8.64 0 16 2.944 22.016 8.96l46.016 44.992c8 9.344 10.432 19.84 7.488 31.488a28.736 28.736 0 0 1-22.08 22.016 33.024 33.024 0 0 1-31.424-7.488l-45.056-46.016a29.952 29.952 0 0 1-8.96-22.016c0-8.704 3.008-16.384 8.96-23.04v0.064z m542.976 542.976a33.408 33.408 0 0 1 23.04-8.96c8.64 0 16.32 3.008 23.04 8.96l44.992 46.08c5.952 5.952 8.96 13.312 8.96 22.016a30.72 30.72 0 0 1-9.536 22.464 30.912 30.912 0 0 1-22.464 9.536 29.888 29.888 0 0 1-22.016-9.024l-46.016-44.992a33.408 33.408 0 0 1-8.96-23.04c0-8.64 2.944-16.32 8.96-22.976zM64 512c0-9.344 3.008-17.024 8.96-23.04a31.168 31.168 0 0 1 23.04-8.96h64c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04a31.168 31.168 0 0 1-8.96 23.04 31.168 31.168 0 0 1-23.04 8.96h-64a31.168 31.168 0 0 1-23.04-8.96A31.168 31.168 0 0 1 64 512z m768 0c0-9.344 3.008-17.024 8.96-23.04a31.168 31.168 0 0 1 23.04-8.96h64c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04a31.168 31.168 0 0 1-8.96 23.04 31.168 31.168 0 0 1-23.04 8.96h-64a31.168 31.168 0 0 1-23.04-8.96A31.168 31.168 0 0 1 832 512z m-636.992 316.992a33.408 33.408 0 0 1-8.96-23.04c0-8.64 2.944-16 8.96-22.016l44.992-46.016a33.408 33.408 0 0 1 23.04-8.96 30.72 30.72 0 0 1 22.464 9.536 30.72 30.72 0 0 1 9.472 22.464 33.408 33.408 0 0 1-8.96 23.04l-46.016 44.992a29.952 29.952 0 0 1-22.016 8.96 33.344 33.344 0 0 1-23.04-8.96h0.064z m542.976-542.976a33.408 33.408 0 0 1-8.96-23.04c0-8.64 3.008-16.32 8.96-22.976l46.08-44.992a29.952 29.952 0 0 1 22.016-8.96 30.72 30.72 0 0 1 22.464 9.472 30.912 30.912 0 0 1 9.536 22.464c0 8.704-3.008 16-9.024 22.08l-44.992 46.016a33.408 33.408 0 0 1-23.04 8.96 33.408 33.408 0 0 1-22.976-8.96v-0.064z"
                                    fill="#09d2df" p-id="3322"></path>
                            </svg>
                            :
                            <svg t="1691746421988" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="3701" width="200" height="200">
                                <path
                                    d="M240 240a391.36 391.36 0 0 0-99.52 176.512 378.816 378.816 0 0 0 4.032 202.048 372.8 372.8 0 0 0 104.96 172.992 381.248 381.248 0 0 0 179.008 94.016c68.992 15.68 136.32 12.8 202.048-8.512a384.32 384.32 0 0 0 169.472-111.04 445.504 445.504 0 0 1-227.456-3.008 440.448 440.448 0 0 1-196.032-115.456A439.808 439.808 0 0 1 261.12 451.52a446.016 446.016 0 0 1-3.008-227.456l-18.048 16z m182.016 362.048c74.624 72 160.96 109.44 259.008 112.512 97.984 3.008 186.688-28.8 265.984-95.488-28.672 108.672-86.336 194.176-172.992 256.512-86.656 62.336-185.984 89.792-297.984 82.496-112-10.688-205.696-53.696-280.96-129.024-75.392-75.328-118.4-168.96-129.024-280.96-7.36-112 20.16-211.392 82.496-298.048s147.84-144.32 256.512-172.992c-66.688 79.36-98.56 168-95.488 266.048 3.008 97.92 40.512 184.32 112.512 259.008l-0.064-0.064z"
                                    fill="#ff0" p-id="3702"></path>
                            </svg>
                        }
                        <div className={BaseLayoutClasses.themeName}>
                            {currentThemeColor === "light" ? "浅色" : "深色"}
                        </div>
                    </div>
                    <div className={BaseLayoutClasses.searchInputBox}>
                        {currentPath.indexOf("/search") === -1 ?
                            <Search placeholder="请输入搜索内容" onSearch={onSearch} enterButton/> : ""}
                    </div>
                </div>
            </header>

            {/* 路由引入位置 */}
            <div className={BaseLayoutClasses.outlet}><Outlet/></div>
            <FloatButton.BackTop/>

        </div>
    );
};

export default BaseLayout;
