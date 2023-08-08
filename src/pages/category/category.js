import React, {useEffect, useState} from 'react';
import CategoryItem from "../../components/CategoryItem";
import CategoryClasses from "./category.module.scss"
import Request from "../../utils/Request";

const Category = () => {
    const [categoryList, setCategoryList] = useState([]);
    const getCategoryList = async () => {

            let result = await Request("/lin/getCategory");
            if (result.code === 200) {
                setCategoryList(result.categoryList)
            }

    }
    useEffect(() => {
        getCategoryList();
    }, [])


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
