import React, { useContext } from 'react'
import "./CartItem.css"
import remove_icon from '../Assets/cart_cross_icon.png';
import {ShopContext} from "../../Context/ShopContext";

const CartItem = () => {
    const { all_product, cartItem, removecart, getTotalAmount} = useContext(ShopContext);
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />


                {all_product.map((e) => {
                    if (cartItem[e.id] > 0) {
                        return (
                            <div key={e.id} >
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                                <p>{e.new_price*(cartItem[e.id])}</p>
                                <img src={remove_icon} className='remove' onClick={() => removecart(e.id)} alt="" />
                            </div>
                            </div>

            )
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>   
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>

                    </div>

                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalAmount()}</h3>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CartItem