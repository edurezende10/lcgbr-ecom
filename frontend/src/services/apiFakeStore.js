import axios from 'axios'
import Data from './data'

export const getProducts = async ()=>{
   // return await axios.get("https://fakestoreapi.com/products")
   return Data
}

export const getSingleProduct =  (id)=>{
    
    let result = Data.filter((product)=>{return product.id===Number(id)})
    
    return result
}

 