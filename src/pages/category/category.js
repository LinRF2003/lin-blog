// import React, {useEffect, useState} from 'react';
import CategoryItem from "../../components/CategoryItem";
import CategoryClasses from "./category.module.scss"
// import Request from "../../utils/Request";
import {useSelector} from "react-redux";


const Category = () => {
    // 通过useSelector直接拿到store中定义的value
    const categoryList = useSelector((store)=>store.index.categoryList);
    console.log(categoryList)

    return (
        <div className={CategoryClasses.category}>
            <div className={CategoryClasses.list}>
                {categoryList.map((item) =>
                    <CategoryItem categoryInfo={item} key={item.name}/>
                )}
            </div>

        </div>
    );
};

export default Category;
