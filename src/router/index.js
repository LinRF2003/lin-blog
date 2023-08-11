import {Navigate} from "react-router-dom"
import {lazy, Suspense} from "react";
import AuthRouter from "./authRouter";

const BaseLayout = lazy(() => import("../layout/BaseLayout"))
const Blog = lazy(() => import("../pages/blog/blog"));
const UserCenter = lazy(() => import("../pages/user-center/userCenter"));
const Category = lazy(() => import("../pages/category/category"));
const BlogDetail = lazy(() => import("../pages/blogDetail/blogDetail"));
const CategoryDetail = lazy(() => import("../pages/categoryDetail/categoryDetail"));
const Search = lazy(() => import("../pages/search/search"));
const Login = lazy(() => import("../pages/login/login"));

// 定义懒加载的外层组件
const loadingComponent = (compontent, needLogin = false) => (
    needLogin ?
        <AuthRouter>
            <Suspense   fallback={
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 200
                    }}
                >
                    loading...
                </div>
            }>
                {compontent}
            </Suspense>
        </AuthRouter>
        : <Suspense   fallback={
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 200
                }}
            >
                loading...
            </div>
        }>
            {compontent}
        </Suspense>
)

const routes = [
    {
        path: '/',
        // todo 需要加个layout 把app 头部导航放进去
        element: loadingComponent(<BaseLayout/>),
        children: [
            {
                path: '/blog',
                // element: lazy(()=>import("../pages/blog/blog")),
                element: loadingComponent(<Blog/>),
            },
            {
                path: '/userCenter',
                element: loadingComponent(<UserCenter/>,true)
            },
            {
                path: '/category',
                element: loadingComponent(<Category/>)
            },
            {
                path: "/",
                element: <Navigate to="/blog"/>
            },
            {
                path: "/blogDetail/:id",
                element:loadingComponent(<BlogDetail/>)
            },
            {
                path: "/category/:name",
                element:loadingComponent(<CategoryDetail/>)
            },
            {
                path: "/search",
                element:loadingComponent(<Search/>)
            }
        ]
    },

    {
        path: "/login",
        element:loadingComponent(<Login/>)
    },
    {
        path: "/*",
        element: <div>页面不存在</div>
    }
]

export default routes;


