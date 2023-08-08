import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Request from "../../utils/Request";
import BlogDetailClasses from "./blogDetail.module.scss"
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";

const BlogDetail = () => {
    const {id} = useParams();
    const [blogDetailInfo,setBlogDetailInfo] = useState();
    const getBlogDetail = async () => {
        let result = await Request("/blog/getDetail",{
            id,
        })
        setBlogDetailInfo(result.data[0]);
    }
    // 获取博客详情
    useEffect(() => {
        getBlogDetail();
    },[])

    useEffect(() => {
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
    }, [blogDetailInfo])

    return (
        <div className={`outer-border ${BlogDetailClasses.blogDetail}`}>
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
            <div dangerouslySetInnerHTML={{__html: blogDetailInfo?.content}}/>
            </div>
        </div>
    );
};

export default BlogDetail;
