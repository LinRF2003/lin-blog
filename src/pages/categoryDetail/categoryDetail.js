import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Request from "../../utils/Request";
import BlogItem from "../../components/blogItem/BlogItem";
import CategoryDetailClasses from "./categoryDetail.module.scss"
import {BASEIMGURL} from "../../utils/config";
import RightBox from "../../components/rightBox/RightBox";
import Rank from "../../components/rank/Rank";
import CategoryListBox from "../../components/categoryListBox/CategoryListBox";

const CategoryDetail = (props) => {
    const {name} = useParams();
    const [categoryData, setCategoryData] = useState({});
    const [blogData, setBlogData] = useState({});

    useEffect(() => {
        // 获取分类详情数据
        const getDetail = async () => {
            let result = await Request("/lin/getCategoryDetail", {
                tags: name
            });
            if (result.code === 200) {
                setCategoryData(result.categoryData);
                setBlogData(result.blogData);
            }
        }
        getDetail();
    }, [name])
    return (
         <div className={CategoryDetailClasses.detail}>
             <div className={CategoryDetailClasses.left}>
                 <div className={`outer-border ${CategoryDetailClasses.cate}`}>
                     <div>
                         {categoryData.url ?  <img src={BASEIMGURL + categoryData.url} alt="" className={CategoryDetailClasses.img}/>:<div className={CategoryDetailClasses.img}></div>}

                     </div>
                     <div className={CategoryDetailClasses.r}>
                         <div className={CategoryDetailClasses.name}>{categoryData?.name}</div>
                         <div className={CategoryDetailClasses.desc}>{categoryData?.desc}</div>
                         <div className={CategoryDetailClasses.count}>文章数 {categoryData?.count}</div>
                     </div>
                 </div>

                 <div className={CategoryDetailClasses.blogList}>
                     {blogData.list && blogData.list.length > 0 && blogData.list.map((item) =>
                         <BlogItem key={item.id} blogInfo={item}/>
                     )}
                 </div>
             </div>
             <RightBox>
                 <CategoryListBox/>
                 <Rank className={"mt16"}/>
             </RightBox>
         </div>
    );
};

export default CategoryDetail;
