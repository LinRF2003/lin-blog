import React from 'react';
import UserClasses from './userCenter.module.scss'
import RightBox from "../../components/rightBox/RightBox";
import Rank from "../../components/rank/Rank";
import Introduce from "../../components/introduce/Introduce";

const UserCenter = () => {
    return (
        <div className={UserClasses.user}>
            <div className={`outer-border ${UserClasses.left}`}>
                <div className={UserClasses.box}>
                    <h2 className={UserClasses.title}>关于我</h2>
                    <div className={UserClasses.content}>
                        {/*<div>头像</div>*/}
                        <div className={UserClasses.c}>
                            <p>
                                <strong
                                    className={UserClasses.name}>林瑞锋</strong>，广东揭阳，2003年，专科，就读于'<strong>广东青年职业学院</strong>'，专业'<strong>软件技术</strong>'。
                            </p>
                            <p>本人性格开朗，乐观向上，有较好的团队协作能力。</p>
                            <p>工作态度端正、认真负责、做事细心并有耐心。适应能力强，抗压能力强。</p>
                        </div>
                    </div>
                </div>
                <div className={UserClasses.box}>
                    <h2 className={UserClasses.title}>项目经验</h2>
                    <div className={UserClasses.content}>
                        <div className={UserClasses.item}>
                            <div className={UserClasses.time}>
                                2022.8 - 2023.1
                            </div>
                            <div className={`${UserClasses.sItem}`}>
                                <h3>blog-feng</h3>
                                <p> 项目描述：一个博客论坛交流平台，可以进行登录注册、发布博客、查看博客、提问及解答问题、发布动态、修改个人信息等功能。</p>
                                <p>线上地址：<a href="http://159.75.169.144" target="_blank">http://159.75.169.144</a></p>
                                <p>项目地址：<a href="https://gitee.com/lrf2673760057/blog-feng"
                                           target="_blank">https://gitee.com/lrf2673760057/blog-feng</a>
                                </p>
                                <p>技术栈：Vue2、Vue Router、Vuex、Mysql、Nodejs、Redis、Elemet-ui</p>
                                <p>1. 通过 Vue-router 提高单页面组件切换的效率，Vuex 集中式存储管理组件优化复杂单页面的结构化和易维护性。</p>
                                <p>2. 使用 NodeJs 进行后端开发，并用 Mysql 进行数据存储，使用 Redis 进行验证码的存储，提升响应速度。</p>
                                <p>3. 登录成功后接口返回token，利用全局路由守卫 beforeEach 做登录鉴权操作，利用 token 判断访问路径是否可以跳转。</p>
                                <p>4. 性能优化：dist
                                    文件采用 gzip 压缩，在 nginx 中添加相应配置，路由使用懒加载，部分页面避免一次性获取数据量较大，导致页面加载变慢，采取分页处理。</p>
                            </div>
                        </div>
                        <div className={UserClasses.item}>
                            <div className={UserClasses.time}>
                                2023.2 - 2023.5
                            </div>
                            <div className={`${UserClasses.sItem}`}>
                                <h3>feng-shop</h3>
                                <p> 项目描述：一个简单便捷的电商项目，拥有基本的浏览商品，购买商品，购物车，收货地址等相关功能。
                                </p>
                                <p> h5 线上地址：<a href="http://159.75.169.144:3300"
                                               target="_blank">http://159.75.169.144:3300</a>
                                </p>
                                <p> 项目地址：<a href="https://gitee.com/lrf2673760057/feng-shop-frontend"
                                            target="_blank"> https://gitee.com/lrf2673760057/feng-shop-frontend</a>
                                </p>
                                <p> 技术栈：uniapp、Node、Mysql、uView</p>
                                <p>1. 购物车使用进行缓存进行存储，在用户首次进入时从数据库中获取用户的购物车信息并使用 uni.setStorageSync
                                    存入用户本地缓存中，离开时将数据返回给服务器，这可以加快响应速度，提升用户体验。</p>
                                <p>2. 自定义封装了 uni.request 方法，可以更方便的统一接口请求方式且在请求中可以做出相应的处理，携带上所需要的东西。</p>
                            </div>
                        </div>
                        <div className={UserClasses.item}>
                            <div className={UserClasses.time}>
                                2023.6 - 2023.8
                            </div>
                            <div className={`${UserClasses.sItem}`}>
                                <h3>lin-blog</h3>
                                <p> 项目描述：个人网站，记录一些个人博客及笔记等内容，查看分类，个人介绍已及搜索等内容。
                                </p>
                                <p> 线上地址：<a href="http://159.75.169.144:8081"
                                               target="_blank">http://159.75.169.144:8081</a>
                                </p>
                                <p> 项目地址：<a href="https://gitee.com/lrf2673760057/lin-blog"
                                            target="_blank">https://gitee.com/lrf2673760057/lin-blog</a>
                                </p>
                                <p> 技术栈：React、React-router、Redux、And Design</p>
                                <p>1. 自定义组件开发实现组件复用，加快开发效率，提高维护性。</p>
                                <p>2. 在 :root 声明全局变量，并在页面中实现点击按钮修改全局变量从而切换深浅色主题的功能。</p>
                                <p>3. 使用 lazy 配合 Suspense 实现路由懒加载，可以提升首页加载速度。</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <RightBox>
                <Rank/>
                <Introduce className={'mt16'}/>
            </RightBox>
        </div>
    );
};

export default UserCenter;
