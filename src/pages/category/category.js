import React from 'react';
import CategoryItem from "../../components/CategoryItem";
import CategoryClasses from "./category.module.scss"

const Category = () => {
    const categoryList = [
        {
            url: "../assets/images/HTML5.png",
            title: "HTML",
            desc: "介绍一些关于 HTML 的内容",
        },
        {
            url: "../assets/images/CSS3.png",
            title: "CSS",
            desc: "介绍一些关于 CSS 的内容",
        },
        {
            url: "../assets/images/JavaScript.png",
            title: "JavaScript",
            desc: "介绍一些关于 JavaScript 的内容",
        },
        {
            url: "../assets/images/Vue.png",
            title: "Vue",
            desc: "介绍一些关于 Vue 的内容",
        },
        {
            url: "../assets/images/React.png",
            title: "React",
            desc: "介绍一些关于 React 的内容",
        },
        {
            url: "../assets/images/Node.js.png",
            title: "Node",
            desc: "介绍一些关于 Node 的内容",
        }


    ]
    return (
        <div className={CategoryClasses.category}>
            <div className={CategoryClasses.list}>
                    {categoryList.map((item) =>
                        <CategoryItem categoryInfo={item} key={item.title}/>
                    )}
            </div>

        </div>
    );
};

export default Category;
