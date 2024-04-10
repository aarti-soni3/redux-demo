import {configureStore} from '@reduxjs/toolkit';
import { counterSlice } from './Slices/Counter/CounterSlice';

export const store = configureStore({
    reducer :{
        counter : counterSlice.reducer,
    },
});