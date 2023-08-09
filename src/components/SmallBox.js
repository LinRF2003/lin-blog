import React from 'react';
import SmallBoxClasses from "./SmallBox.module.scss";


// 小盒子的外层样式
const SmallBox = (props) => {
    return (
        <div className={`outer-border ${SmallBoxClasses.outerBox} ${props.className}`}>
            <div className={`ct st`}>
                {props.title}
            </div>
            <div className={SmallBoxClasses.list}>
                {props.children}
            </div>
        </div>
    );
};

export default SmallBox;
