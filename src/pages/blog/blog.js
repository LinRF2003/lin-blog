import React, {useEffect, useState} from 'react';
import Request from "../../utils/Request";
import BlogItem from "../../components/blogItem/BlogItem";
import Rank from "../../components/rank/Rank";
import CategoryListBox from "../../components/categoryListBox/CategoryListBox";
import BlogClasses from './blog.module.scss'
import RightBox from "../../components/rightBox/RightBox";
import Introduce from "../../components/introduce/Introduce";
import MyPagination from "../../components/myPagination/MyPagination";

const Blog = () => {
    const defaultPageSize = 6;

    const [blogData, setBlogData] = useState("");

    const getBlogList = async (pageNo = 1) => {
        const result = await Request("/lin/getBlog", {
            pageNo: pageNo,
            pageSize:defaultPageSize
        });
        if (result.code === 200) {
            setBlogData(result.data);
        }
    }
    // 页码修改
    const onChangePage= async (e)=> {
        await getBlogList(e)

    }

    useEffect(() => {
        getBlogList();
    }, []);



    return (
        <div className={BlogClasses.blog}>
            <div className={BlogClasses.left}>
                {blogData?.list && blogData?.list.length > 0 && blogData?.list.map((item) =>
                    <BlogItem key={item.id} blogInfo={item}/>
                )}
                <MyPagination onChangePage={onChangePage} totalCount={blogData.totalCount} pageTotal={blogData.pageTotal} defaultPageSize={defaultPageSize}/>

            </div>
            <RightBox>
                <Rank/>
                <CategoryListBox className={"mt16"}/>
                <Introduce className={"mt16"}/>
            </RightBox>
        </div>
    );
};

export default Blog;
