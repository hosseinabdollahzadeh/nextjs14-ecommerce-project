"use client"

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const {product, qty} = action.payload
            state.cart = [...state.cart, {...product, qty: qty}]
            console.log(state.cart)
        },
        removeFromCart: (state, action) => {
            const productId = action.payload
            state.cart = state.cart.filter(p => p.id !== productId)
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export const cartReducer = cartSlice.reducer