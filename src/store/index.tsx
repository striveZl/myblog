import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@/store/festures/counterSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    counter: counterSlice
  }
});

type GetStateFnType = typeof store.getState; //获取函数的类型
type IRootState = ReturnType<GetStateFnType>; //获取函数返回值的类型
type DisparchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DisparchType = useDispatch;

export default store;
