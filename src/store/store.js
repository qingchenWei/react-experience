/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from "redux";
// 引入汇总之后的reducer;
import reducer from "./reducers";
//引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";
//引入redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

//在localStorge中生成key为root的值
const persistConfig = {
  key: "root",
  storage,
  blacklist: [], //设置某个reducer数据不持久化
  // whitelist:['LoadingReducer']   白名单 只执行
};

const myPersistReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  myPersistReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
