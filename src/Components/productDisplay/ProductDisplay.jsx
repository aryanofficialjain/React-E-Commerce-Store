import React, { useContext, useEffect } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addcart,removecart} = useContext(ShopContext);

    return (
        <div className='productDisplay'>
                <img src={product.image} className='productdisplay-main-img' alt="" />

            <div className="productdisplay-right">
                <h1>{product.name}</h1>

                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(456+)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="old">${product.old_price}</div>
                    <div className="new">${product.new_price}</div>
                </div>

                <div className="right-size">
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <div className='BTNS'>
                <button onClick={()=> addcart(product.id)}>Add To Cart</button>
                <button onClick={()=> removecart(product.id)} id='remove'>Remove</button>

                </div>
                

            </div>
        </div>
  )
}

export default ProductDisplay