import axios from "axios"
import { base_url, config } from "../../utils/axiosConfig";



const getProducts=async(userData)=> {
    const response = await axios.get(`${base_url}/productos`);
    if(response.data){
        return response.data
        
    }
    

}

const getSingleProduct=async(id)=> {
    const response = await axios.get(`${base_url}/productos/${id}`);
    if(response.data){
        return response.data
        
    }
    

}



const addToWishList=async(prodId)=> {
    const response = await axios.put(`${base_url}/wishlist`, {prodId}, config);
    if(response.data){
        return response.data
        
    }
    

}



export const productService={
    
    getProducts,
    addToWishList,
    getSingleProduct
}