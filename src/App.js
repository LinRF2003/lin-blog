import React from 'react';
import {useRoutes} from "react-router-dom";
import routes from "./router/index.js"
import "./app.scss"

const App = () => {
    // 解析路由
    const element = useRoutes(routes);
    return (
        <div>
            {element}
        </div>
    );
};

export default App;
