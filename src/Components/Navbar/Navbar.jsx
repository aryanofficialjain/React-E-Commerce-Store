import React, { useContext, useState } from 'react'
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
function Navbar() {
  const {getTotalCartItems} = useContext(ShopContext)

  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      
      <div className="nav-logo">
      <Link to="/" className='link'><img src={logo} alt="Logo" /></Link>
      </div>

      <ul className='nav-menu'>
       <Link to="/" className='link'><li onClick={()=> setMenu("shop")}>Shop{menu === "shop"? <hr/> : <></>}</li></Link>
       <Link to="/mens" className='link'><li onClick={()=> setMenu("men")}>Men {menu === "men"? <hr/> : <></>}</li></Link>
       <Link to="/womens" className='link'><li onClick={()=> setMenu("women")}>Women {menu === "women"? <hr/> : <></>}</li></Link>
       <Link to="/kids" className='link'><li onClick={()=> setMenu("kid")}>Kids {menu === "kid"? <hr/> : <></>}</li></Link>
      </ul>

      <div className="nav-login-cart">
        <div>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <Link to="/cart" className='link'><img src={cart_icon} alt="cart icon" /></Link>
        </div>
        

      </div>



    </div>
  )
}

export default Navbar