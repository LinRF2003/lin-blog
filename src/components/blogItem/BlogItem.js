import React from 'react';
import BlogItemClasses from "./BlogItem.module.scss"
import {Link, useNavigate} from "react-router-dom";
import {EyeOutlined} from "@ant-design/icons";
import Request from "../../utils/Request";

const BlogItem = (props) => {
    const {blogInfo} = props;
    let tagsString = ""
    JSON.parse(blogInfo.tags).forEach((item,index)=>{
        if(index===JSON.parse(blogInfo.tags).length-1){
            return tagsString += item
        }
        tagsString+=`${item} | `;
    })

    const navigate = useNavigate();

    // 点击博客方法
    const clickBlog = () => {
        navigate(`/blogDetail/${blogInfo.id}`);
        // 增加阅读量
        Request("/blog/addViews",{id:blogInfo.id})
    }

    return (
        <div className={BlogItemClasses.outerBox}>
            <div className={`${BlogItemClasses.blogItem} outer-border`} onClick={clickBlog}>
                <div className={BlogItemClasses.left}>
                    <div className={BlogItemClasses.cover}>
                        <img src={blogInfo.cover} alt=""/>
                    </div>
                </div>
                <div className={BlogItemClasses.right}>
                    <div className={BlogItemClasses.title}>
                        {blogInfo.title}
                    </div>
                    <div className={BlogItemClasses.summary}>
                        {blogInfo.summary}
                    </div>
                    <div className={BlogItemClasses.bottom}>
                        <div className={BlogItemClasses.tag}>标签: ({tagsString})</div>
                        <div className={BlogItemClasses.r}>
                            <div className={BlogItemClasses.time}>
                                {blogInfo.createTime}
                            </div>
                            {/*<div className={BlogItemClasses.commentCount}>*/}
                            {/*    {blogInfo.commentCount}*/}
                            {/*</div>*/}
                            <div className={BlogItemClasses.views}>
                                <EyeOutlined /> {blogInfo.views}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;
