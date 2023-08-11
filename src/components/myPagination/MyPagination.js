import React, {useEffect} from 'react';
import {Pagination} from "antd";
import {useState} from "react";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import MyPaginationClasses from './MyPagination.module.scss'

const MyPagination = (props) => {
    const defaultPageSize = props.defaultPageSize || 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);
    // 页码修改
    const changePage = async (e) => {
        props.onChangePage(e)
        setCurrentPage(e)
    }
    useEffect(()=>{
        props.currentPage && setCurrentPage(props.currentPage);
    },[])
    useEffect(() => {
        if (currentPage === 1) {
            setIsFirstPage(true);
            setIsLastPage(false);
        } else if (currentPage === props.pageTotal) {
            setIsFirstPage(false);
            setIsLastPage(true);
        } else {
            setIsFirstPage(false);
            setIsLastPage(false);
        }
    }, [currentPage,props.pageTotal])
    // 修改上下页的 样式
    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <LeftOutlined className={`${MyPaginationClasses.arrow} ${isFirstPage ? MyPaginationClasses.disabled : ''}`}/>;
        }
        if (type === 'next') {
            return <RightOutlined
                className={`${MyPaginationClasses.arrow} ${isLastPage ? MyPaginationClasses.disabled : ''}`}/>;
        }
        return originalElement;
    };
    return (
        <div>
            {props.pageTotal > 1 &&
                <Pagination onChange={changePage} current={currentPage} total={props.totalCount}
                            defaultPageSize={defaultPageSize} itemRender={itemRender}/>
            }
        </div>
    );
};

export default MyPagination;
