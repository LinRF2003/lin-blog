import React, {useEffect, useState} from 'react';
import Request from "../../utils/Request";
import {Outlet} from 'react-router-dom'
import BlogItem from "../../components/BlogItem";

const Blog = () => {
    const [blogList,setBlogList] = useState("");

    // useEffect
    const getBlogList = async (pageNo = 1) => {
        const result = await Request("/blog/get", {
            pageNo: pageNo
        });
        setBlogList(result.data.list);
    }
    useEffect(() => {
        getBlogList();
    }, [])

    return (
        <div>
            {blogList && blogList.map((item) =>
                <BlogItem key={item.id} blogInfo={item}/>
            )}
            <button onClick={()=>getBlogList(2)}>获取第二页数据</button>
            <Outlet></Outlet>
        </div>
    );
};

export default Blog;
