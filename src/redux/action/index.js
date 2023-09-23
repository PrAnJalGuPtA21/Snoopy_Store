//for adding items to the cart ... 
export const addCart =(product)=>{
    return{
        type : "ADDITEM" ,
        payload : product
    }
}

//for deleting  items from the cart ... 
export const deleteCart =(product)=>{
    return{
        type : "DELITEM" ,
        payload : product
    }
}