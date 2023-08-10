import React from 'react';
import SmallBox from "../smallBox/SmallBox";
import IntroduceClasses from './Introduce.module.scss'

const Introduce = (props) => {
    return (
        <SmallBox title={"本站介绍"} className={props.className}>
            <div className={IntroduceClasses.introduce}>
                <div style={{display:"flex"}}>
                    <div className={IntroduceClasses.title}>
                        建站时间：
                    </div>
                    2023.8 - 至今
                </div>
                <div className={IntroduceClasses.title}>
                    前端技术：
                </div>
                <div className={IntroduceClasses.desc}>
                    <p>开发框架：React18</p>
                    <p>组件库：Antd</p>
                    <p>打包工具：Webpack</p>
                    <p style={{display:"flex"}}>工具包：<span style={{flex:"1"}}>axios、react-redux、@reduxjs/toolkit、react-router-dom、sass、highlight.js 等</span></p>
                </div>
                <div className={IntroduceClasses.title}>
                    后端技术：
                </div>
                <div className={IntroduceClasses.desc}>
                    <p>开发框架：express</p>
                    <p>运行环境：Node.js</p>
                    <p>数据库：Mysql</p>
                    <p>工具包：Redis、jwt、cors 等</p>
                </div>

                <div style={{display:"flex"}}>
                    <div className={IntroduceClasses.title}>
                        本站介绍：
                    </div>
                    <span style={{flex:"1"}}>记录个人的笔记及一些问题的解决方案等</span>
                </div>
            </div>
        </SmallBox>
    );
};

export default Introduce;
