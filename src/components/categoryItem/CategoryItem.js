import React from 'react';
import CategoryItemClasses from "./CategotyItem.module.scss"
import {BASEIMGURL} from "../../utils/config";
import {Link} from "react-router-dom";

const CategoryItem = (props) => {
    const {categoryInfo} = props;
    return (
        <Link className={CategoryItemClasses.w} to={`/category/${categoryInfo.name}`}>
            <div className={`${CategoryItemClasses.categoryItem} outer-border`}>
                <div>
                    <img src={`${BASEIMGURL}${categoryInfo.url}`} alt=""/>
                </div>
                <div className={CategoryItemClasses.right}>
                    <div className={CategoryItemClasses.title}>{categoryInfo.name}</div>
                    <div>{categoryInfo.desc}</div>
                    <div>文章数： {categoryInfo.count}</div>
                </div>
            </div>
        </Link>
    );
};

export default CategoryItem;
