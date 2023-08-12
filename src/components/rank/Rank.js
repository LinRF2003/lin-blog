import React, {useEffect, useState} from 'react';
import RankClasses from "./Rank.module.scss"
import Request from "../../utils/Request";
import {useNavigate} from "react-router-dom";
import SmallBox from "../smallBox/SmallBox";
import {EyeOutlined} from "@ant-design/icons";

const Rank = (props) => {
    const [hotBlogList, setHotBlogList] = useState([]);
    const getHotBlog = async () => {
        let result = await Request("/lin/getHot");
        if (result.code === 200) {
            setHotBlogList(result.data);
        }
    }
    const navigate = useNavigate();

    // 点击博客方法
    const clickBlog = (id) => {
        navigate(`/blogDetail/${id}`);
        // 增加阅读量
        Request("/blog/addViews", {id})
    }
    useEffect(() => {
        getHotBlog();
    }, [])
    return (
        <SmallBox title={"排行"} className={props.className}>
            {hotBlogList.map(item => <div className={RankClasses.item} key={item.id} onClick={()=>{clickBlog(item.id)}}>
                <div className={RankClasses.title}>{item.title}</div>
                <div className="divider"/>
                <div><EyeOutlined/> {item.views}</div>
            </div>)}
        </SmallBox>
    );
};

export default Rank;
