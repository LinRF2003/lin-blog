import React from 'react';
import BlogItemClasses from "./BlogItem.module.scss"
import {Link} from "react-router-dom";

const BlogItem = (props) => {
    const {blogInfo} = props;
    let tagsString = ""
    JSON.parse(blogInfo.tags).forEach((item,index)=>{
        if(index===JSON.parse(blogInfo.tags).length-1){
            return tagsString += item
        }
        tagsString+=`${item} | `;
    })

    console.log(props)
    return (
        <div className={BlogItemClasses.outerBox}>
            <Link className={`${BlogItemClasses.blogItem} outer-border`} to={`/blogDetail/${blogInfo.id}`}>
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
                            <div className={BlogItemClasses.commentCount}>
                                {blogInfo.commentCount}
                            </div>
                            <div className={BlogItemClasses.views}>
                                {blogInfo.views}
                            </div>

                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BlogItem;
