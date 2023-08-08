import React, {useEffect, useState} from 'react';
import Request from "../../utils/Request";
import {Outlet} from 'react-router-dom'
import BlogItem from "../../components/BlogItem";

const Blog = () => {
    const [blogData,setBlogData] = useState("");

    // useEffect
    const getBlogList = async (pageNo = 1) => {
        const result = await Request("/lin/getBlog", {
            pageNo: pageNo
        });
        if(result.code === 200) {
            setBlogData(result.data);
        }
    }
    useEffect(() => {
        getBlogList();
    }, [])

    return (
        <div style={{padding:"10px 0 30px"}}>
            {blogData.list && blogData.list.length > 0 && blogData.list.map((item) =>
                <BlogItem key={item.id} blogInfo={item}/>
            )}
        </div>
    );
};

export default Blog;
