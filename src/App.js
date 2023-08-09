import React, {useEffect} from 'react';
import {useRoutes} from "react-router-dom";
import routes from "./router/index.js"
import "./app.scss"
import {useDispatch} from "react-redux";
import {getCategoryList} from "./store";
import Request from "./utils/Request";


const App = () => {
    // 解析路由
    const element = useRoutes(routes);
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategory = async () => {
            let result = await Request("/lin/getCategory");
            if (result.code === 200) {
                dispatch(getCategoryList(result.data));
            }
        }
        getCategory();
        // eslint-disable-next-line
    },[])

    return (
        <div>
            {element}
        </div>
    );
};

export default App;
