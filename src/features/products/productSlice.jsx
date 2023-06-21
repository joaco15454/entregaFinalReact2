import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { authService } from "./userService";
import { toast } from "react-toastify";
import { productService } from "./productService";
import { registerUser } from "./userSlice";


export const getAllProducts = createAsyncThunk
("product/get", async( thunkAPI) => {
    try {
        return await productService.getProducts()
    }catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
})


export const getAProduct= createAsyncThunk
("product/getAProduct", async( thunkAPI) => {
    try {
        return await productService.getSingleProduct(id)
    }catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
})


export const addToWishList = createAsyncThunk
("product/wishlist", async( prodId, thunkAPI) => {
    try {
        return await productService.addToWishList(prodId)
    }catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const addProdToCart = createAsyncThunk
("product/cart", async( cartData, thunkAPI) => {
    try {
        return await authService.addToCart(cartData)
    }catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const productState= {
    product: "",
    isError:false,
    isSucces:false,
    isLoading: false,
    message:"",
}

export const productsSlice = createSlice({
    name: 'product',
    initialState:productState,
    reducers: {},
    extraReducers:(constructor) => {
        constructor
        .addCase(getAllProducts.pending,(state) =>{
            state.isLoading=true;
        }).addCase(getAllProducts.fulfilled,(state,action) => {
            state.isLoading = false;
            state.isError=false;
            state.isSucces = true;
            state.product = action.payload
        }).addCase(getAllProducts.rejected,( state,action) => {
            state.isError = true;
            state.isLoading = false;
            state.isSucces = false;
            state.message=action.error
        }).addCase(addProdToCart.pending, (state) => {
            state.isLoading = true;
        }).addCase(addProdToCart.fulfilled,(state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucces = true;
            state.cartProduct = action.payload;
            state.message = "Product agregado To WIshList"
            if (state.isSucces) {
                toast.success("Prod tu cart")
            }
        }).addCase(addProdToCart.rejected,(state,action) => {
            state.isLoading=false;
            state.isError=true;
            state.isSucces=false;
            state.message=action.error;
        }).addCase(getAProduct.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAProduct.fulfilled,(state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucces = true;
            state.product = action.payload;
            state.message = "producto fetcheado"
        }).addCase(getAProduct.rejected,(state,action) => {
            state.isLoading=false;
            state.isError=true;
            state.isSucces=false;
            state.message=action.error;
        })
    },
})

export default productsSlice.reducer;

