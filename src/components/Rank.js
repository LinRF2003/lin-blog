import React, {useEffect, useState} from 'react';
import RankClasses from "./Rank.module.scss"
import Request from "../utils/Request";
import {Link} from "react-router-dom";
import SmallBox from "./SmallBox";

const Rank = (props) => {
    const [hotBlogList,setHotBlogList] = useState([]);
    const getHotBlog = async () => {
        let result = await Request("/lin/getHot");
        if(result.code === 200){
            setHotBlogList(result.data);
        }
    }
    useEffect(() => {
     getHotBlog();
    },[])
    return (
        <SmallBox title={"排行"} className={props.className}>
                {hotBlogList.map(item=><Link  className={RankClasses.item} key={item.id} to={`/blogDetail/${item.id}`}>
                    <div className={RankClasses.title}>{item.title}</div>
                    <div className="divider"/>
                    <div>{item.views}</div>
                </Link>)}
        </SmallBox>
    );
};

export default Rank;
