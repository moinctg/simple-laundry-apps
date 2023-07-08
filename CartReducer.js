import {createSlice} from "@reduxjs/toolkit"


export const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],

    },
    reducers:{
        addToCart:(state,action) =>{
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if(itemPresent){
                itemPresent.quntity++;

            }
            else {
                state.cart.push({...action.payload,quntity:1})
            }
        },
        removeFromCart:(state,action) =>{
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart= removeItem
        },
        incrementQuntity:(state,action) => {
            const intemPresent = state.cart.find((item) =>item.id === action.payload.id);
            intemPresent.quntity++;

        },
        decrementQuntity:(state,action) =>{
            const itemPresent = state.cart.find((item)=> item.id !== action.payload.id);
            if(itemPresent==1) {
                itemPresent.quntity =0;
                const removeItem = state.cart.filter((item) =>item.id !== action.payload.id );
                state.cart = removeItem;
            }
            else{
                itemPresent.quntity--;
            }

        }

    }
})

export const {addToCart,removeFromCart,incrementQuntity,decrementQuntity} = CartSlice.actions;

export default CartSlice.reducer;