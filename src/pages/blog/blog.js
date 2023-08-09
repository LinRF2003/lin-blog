import React, {useEffect, useRef, useState} from 'react';
import Request from "../../utils/Request";
import BlogItem from "../../components/blogItem/BlogItem";
import Rank from "../../components/rank/Rank";
import CategoryListBox from "../../components/categoryListBox/CategoryListBox";
import BlogClasses from './blog.module.scss'
import RightBox from "../../components/rightBox/RightBox";

const Blog = () => {
    const [blogData, setBlogData] = useState("");
    const [isFixed, setIsFixed] = useState(false);

    // useEffect
    const getBlogList = async (pageNo = 1) => {
        const result = await Request("/lin/getBlog", {
            pageNo: pageNo
        });
        if (result.code === 200) {
            setBlogData(result.data);
        }
    }

    useEffect(() => {
        getBlogList();
        // 监听滚动的函数
        const scrollHandler = (e) =>{
            if(document.documentElement.scrollTop > 70){
                setIsFixed(true)
            }else{
                setIsFixed(false)
            }
        }

        window.addEventListener("scroll", scrollHandler)
        return () => {
            // 关闭监听函数
            window.removeEventListener("scroll", scrollHandler)
        }
    }, []);

    return (
        <div className={BlogClasses.blog}>
            <div className={BlogClasses.left}>
                {blogData?.list && blogData?.list.length > 0 && blogData?.list.map((item) =>
                    <BlogItem key={item.id} blogInfo={item}/>
                )}
            </div>
            <RightBox>  <Rank/>
                <CategoryListBox className={"mt16"}/></RightBox>
        </div>
    );
};

export default Blog;
