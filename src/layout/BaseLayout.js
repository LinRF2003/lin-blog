import React, {useState} from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";
import BaseLayoutClasses from "./BaseLayout.module.scss"
import { Input } from 'antd';
const { Search } = Input;

const BaseLayout = () => {
    // 获取当前路径
    const {pathname: currentPath} = useLocation();
    const [currentThemeColor,setCurrentThemeColor] = useState("light");

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
            name: "个人中心"
        },
    ]

    // 搜索函数
    const onSearch=  (e)=>{

        console.log(e)
    }


    // 切换主题
    const changeTheme = () => {
        let themeList;
        if(currentThemeColor==='light'){
             themeList = {
                '--nav-bg':'#11365c',
                '--body-bg':'#1e2d3c',
                '--item-bg':'#1b3651',
                '--border-color':'#388de0',
                '--desc-color':'#aaa',
                '--title-color':'#fff',
                 '--detail-bg':'#11365c',
            }
            setCurrentThemeColor('dark');
        }else{
            themeList = {
                '--nav-bg':'#222',
                '--body-bg':'#f5f7fa',
                '--item-bg':'#fff',
                '--border-color':'#eee',
                '--desc-color':'#676767',
                '--title-color':'#000',
                '--detail-bg':'#fff',
            }
            setCurrentThemeColor('light')
        }
        for (const element in themeList) {
            document.documentElement.style.setProperty(element,themeList[element]);
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
                    </div>
                    <button onClick={changeTheme}>切换主题</button>
                    <div className={BaseLayoutClasses.searchInputBox}>
                        <Search placeholder="请输入搜索内容" onSearch={onSearch} enterButton />
                    </div>
                </div>
            </header>

            {/* 路由引入位置 */}
            <div className={BaseLayoutClasses.outlet}><Outlet/></div>

        </div>
    );
};

export default BaseLayout;
