"use client"

import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "@/redux/slices/cartSlice";

export const store = configureStore({
    reducer:{
        shoppingCart: cartReducer
    }
})