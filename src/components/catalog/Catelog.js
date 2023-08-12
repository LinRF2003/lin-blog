import React, {useEffect, useRef, useState} from 'react';
import SmallBox from "../smallBox/SmallBox";
import './Catalog.scss'

const Catalog = (props) => {
    const ref = useRef();
    // 点击 a 标签时控制滚动的参数
    const [isClick, setIsClick] = useState(false);
    useEffect(() => {
        // 获取当前标题所在的元素
        const changeTop = () => {
            for (const element of ref.current.children) {
                if (element.text === props.currentTitle) {
                    ref.current.scrollTop = element.offsetTop - ref.current.offsetTop;
                    return;
                }

            }
        }
        console.log(isClick)
        if (!isClick) {
            changeTop();
        }
    }, [props.currentTitle, isClick])

    const onClick = (e) => {

        document.querySelector("html").style.scrollBehavior = 'smooth'
        //scroll-behavior: smooth;
        const changeIsClick = () => {
            setIsClick(false);
            document.querySelector("html").style.scrollBehavior = 'auto'
        }
        // 防止短时间内重复点击
        clearTimeout(changeIsClick);
        setIsClick(true);
        for (const element of ref.current.children) {
            if (element.text === e.target.text) {
                ref.current.scrollTop = element.offsetTop - ref.current.offsetTop;
                break;
            }
        }

        // 给滚动点时间，不然它有问题噢
        setTimeout(changeIsClick, 1000);

    }
    // console.log(ref.current?.getBoundingClientRect().top)
    return (
        <SmallBox title={"目录"} className={props.className}>
            <div className={"catalog"} ref={ref}>{props.catalog.map(item => (
                <a href={`#${item.id}`} key={item.id}
                   className={`catalog-item level${item.level} ${props.currentTitle === item.title ? "active " : ""}`}
                   id={item.id} onClick={onClick}>{item.title}</a>
            ))}</div>
        </SmallBox>
    );
};

export default Catalog;
