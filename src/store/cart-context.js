import React from 'react';
const cartConetxt= React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})
export default cartConetxt;