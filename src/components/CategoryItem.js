import React from 'react';
import CategoryItemClasses from "./CategotyItem.module.scss"

const CategoryItem = (props) => {
    const {categoryInfo} = props;
    return (
        <div className={CategoryItemClasses.w}>
            <div className={`${CategoryItemClasses.categoryItem} outer-border`}>
                <div>
                    <img src={require("../assets/images/HTML5.png")} alt=""/>
                </div>
                <div className={CategoryItemClasses.right}>
                    <div className={CategoryItemClasses.title}>{categoryInfo.title}</div>
                    <div>{categoryInfo.desc}</div>
                    <div>文章数：6</div>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;
