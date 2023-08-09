import React from 'react';
import {useSelector} from "react-redux";
import CategoryListBoxClasses from './CategoryListBox.module.scss'
import SmallBox from "./SmallBox";
import {BASEIMGURL} from "../utils/config";
import {Link} from "react-router-dom";

const CategoryListBox = (props) => {
    const {categoryList} = useSelector(state=>state.index)
    return (
        <SmallBox title={"分类"} className={props.className}>
                {categoryList && categoryList.map(item=><Link key={item.name} className={CategoryListBoxClasses.item} to={`/category/${item.name}`}>
                    <div>
                        <img src={BASEIMGURL +item.url} alt=""/>
                    </div>
                    <div className={CategoryListBoxClasses.name}>
                        {item.name}
                    </div>
                    <div className="divider"/>

                    <div>
                        {item.count} 篇
                    </div>
                </Link>)}
        </SmallBox>

    );
};

export default CategoryListBox;
