import React, {useEffect, useState} from 'react';
import SearchClasses from "./search.module.scss";
import {Empty, Input, Spin} from 'antd';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Request from "../../utils/Request";
import {defaultPageSize} from "../../utils/config";
import BlogItem from "../../components/blogItem/BlogItem";
import MyPagination from "../../components/myPagination/MyPagination";

const {Search} = Input;

const SearchPage = (props) => {
    const [blogData, setBlogData] = useState("");
    const [text, setText] = useState("");
    const [pageNo, setPageNo] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const {search} = useLocation();

    useEffect(() => {
        const arr = search.split('&');
        // 设置数据
        arr[1] && setPageNo(arr[1].substring(7))
        arr[0] && setText(arr[0].substring(6));
    }, [])

    const navigate = useNavigate();
    // 搜索函数
    const onSearch = (value) => {
        if (value === text) {
            return;
        }
        // 修改路由
        navigate(`/search?text=${value}&pageNo=${pageNo}`);
        setText(value);
        setPageNo(1);
    }

    // 获取博客数据
    const getBlogList = async () => {
        setIsLoading(true);
        const result = await Request("/lin/search", {
            pageNo: pageNo,
            pageSize: defaultPageSize,
            content: text
        });
        if (result.code === 200) {
            setBlogData(result.data);
        }
        setIsLoading(false);
    }
    // 页码修改
    const onChangePage = async (value) => {
        // 修改路由
        navigate(`/search?text=${text}&pageNo=${value}`);
        // 回到顶部
        window.scrollTo(0, 0)
        setPageNo(value);
    }
    useEffect(() => {
        getBlogList();
    }, [pageNo, text])
    return (
        <div className={SearchClasses.search}>
            <div className={SearchClasses.input}>
                <Search placeholder="请输入搜索内容" onSearch={onSearch} enterButton rootClassName={SearchClasses.inputBox}/>
            </div>

            <div className={SearchClasses.content}>
                {isLoading ? <Spin tip="Loading" size="large" style={{marginTop: "80px"}}>
                        <div className="content"/>
                    </Spin> :
                    <>
                        {blogData?.list && blogData?.list.length > 0 ? blogData?.list.map((item) =>
                            <BlogItem key={item.id} blogInfo={item}/>
                        ) : <Empty/>}
                        <MyPagination onChangePage={onChangePage} totalCount={blogData.totalCount}
                                      pageTotal={blogData.pageTotal} defaultPageSize={defaultPageSize}
                                      currentPage={search.split('&')[1] && +search.split('&')[1].substring(7)}/>

                    </>
                }
            </div>


        </div>
    );
};

export default SearchPage;
