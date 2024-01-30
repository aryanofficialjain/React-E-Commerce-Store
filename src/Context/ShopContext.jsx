import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getdefaultcart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getdefaultcart());

    const addcart = (id) => {
        setCartItem((prev) => ({
            ...prev,
            [id]: prev[id] + 1
        }));
    }

    const removecart = (id) => {
        setCartItem((prev) => ({
            ...prev,
            [id]: prev[id] - 1
        }));
    }

    const getTotalAmount = () => {
        let total = 0;
        for (const i in cartItem) {
            if (cartItem[i] > 0) {
                let iteminfo = all_product.find((product) => product.id === Number(i));
                total += iteminfo.new_price * cartItem[i];
            }
        }
        return total;
    }

    const getTotalCartItems = ()=> {
        let totalitem = 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                totalitem += cartItem[item];
            }

        }
        return totalitem;
    }

    const contextValue = { getTotalCartItems, all_product, cartItem, addcart, removecart, getTotalAmount };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
