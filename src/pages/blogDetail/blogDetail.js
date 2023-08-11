import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import Request from "../../utils/Request";
import BlogDetailClasses from "./blogDetail.module.scss"
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import {FloatButton} from "antd";
import RightBox from "../../components/rightBox/RightBox";
import Rank from "../../components/rank/Rank";
import Catalog from "../../components/catalog/Catelog";

const BlogDetail = () => {
    const {id} = useParams();
    // 目录列表
    const [catalog, setCatalog] = useState([]);
    // 当前标题
    const [currentTitle, setCurrentTitle] = useState("");
    const [blogDetailInfo, setBlogDetailInfo] = useState("");

    const blogDetailRef = useRef();

    // 获取博客详情
    const getBlogDetail = async () => {
        let result = await Request("/blog/getDetail", {
            id,
        })
        setBlogDetailInfo(result.data[0]);
    }
    // 获取博客详情
    useEffect(() => {
        getBlogDetail();
        // 切换文章时页面回到顶部
        window.scrollTo(0,0);
    }, [id])

    useEffect(() => {
        const tags = ["H1", "H2", "H3", "H4", "H5", "H6"];
        const content = document.querySelector("#content");
        const catalogCopy = [];
        // 取出 content 中的所有标题
        content.childNodes.forEach((item, index) => {
            const {tagName} = item;
            if (!tags.includes(tagName)) {
                return;
            }
            const id = "log" + index
            item.setAttribute("id", id);
            catalogCopy.push({
                id,
                title: item.innerText,
                level: Number.parseInt(tagName.substring(1)),
                element:item
            });
        })

        setCatalog(catalogCopy);

        // 配置 highlight.js
        hljs.configure({
            // 忽略未经转义的 HTML 字符
            ignoreUnescapedHTML: true
        })
        // 获取到内容中所有的code标签
        const codes = document.querySelectorAll('.dg-html pre code')
        codes.forEach((el) => {
            // 让code进行高亮
            hljs.highlightElement(el);
        })

        // 监听页面滚动
        const scrollHandler = () => {
            if(catalogCopy.length > 1) {
                let innerText = catalogCopy[0].element.innerText;
                catalogCopy.forEach(item => {
                    if (item.element.getBoundingClientRect().top < 20) {
                        innerText = item.element.innerText;
                    } else {
                        return;
                    }
                })
                setCurrentTitle(innerText)
            }else{
                return;
            }

        }
        window.addEventListener("scroll", scrollHandler)
        return () => {
            // 关闭监听函数
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [blogDetailInfo])

    return (
        <div className={`${BlogDetailClasses.blogDetail}`} ref={blogDetailRef}>
            <div className={`${BlogDetailClasses.left} outer-border`}>
                <div className={BlogDetailClasses.top}>
                    <div className={BlogDetailClasses.title}>
                        {blogDetailInfo?.title}
                    </div>
                    <div className={BlogDetailClasses.info}>
                        <div>{blogDetailInfo?.createTime}</div>
                        <div className={BlogDetailClasses.commentCount}>{blogDetailInfo?.commentCount}评论</div>
                        <div>{blogDetailInfo?.views}阅读</div>
                    </div>
                </div>
                {/*{JSON.stringify(blogDetailInfo)}*/}
                <div className={BlogDetailClasses.content}>
                    <div dangerouslySetInnerHTML={{__html: blogDetailInfo?.content}} id="content"/>
                </div>
                <FloatButton.BackTop/>
            </div>
            <RightBox>
                <Rank/>
                {catalog.length > 1 ? <Catalog className={"mt16"} catalog={catalog} currentTitle={currentTitle}/> : ""}
            </RightBox>
        </div>
    );
};

export default BlogDetail;
