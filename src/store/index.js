import { createSlice, configureStore } from '@reduxjs/toolkit'

const indexSlice = createSlice({
    name: 'index',
    initialState: {
        categoryList:[],
        value:0
    },
    reducers: {
        // 获取分类列表
        getCategoryList:  (state,action) => {
            state.categoryList = action.payload
        }
    },
})

export const { getCategoryList } = indexSlice.actions

const store = configureStore({
    reducer: {index:indexSlice.reducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            //关闭序列化状态检测中间件
            serializableCheck: false
        }),
})

export default store;
