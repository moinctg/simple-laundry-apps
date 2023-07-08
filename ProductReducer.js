import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:"product",
    initialState:{
        product:[],

    },
    reducers:{
        getProduct:(state,action) => {
            state.product.push({...action.payload});
        },
        incrementQty:(state,action) => {
            const itemPresent = state.product.find((item) => item.id === action.payload.id);
            itemPresent.quntity++;

        },
        decrementQty:(state,action) => {
            const itemPresent = state.product.find((item) => item.id === action.payload.id);
            if(itemPresent.quntity== 1){
                itemPresent.quntity = 0;
                const removeItem = state.product.filter((item) => item.id !== action.payload.id);
                state.cart = removeItem;
            }
            else {
                itemPresent.quntity--;

            }
        }
    }
});

export const { getProduct,incrementQty,decrementQty} =  productSlice.actions;
export default productSlice.reducer; 