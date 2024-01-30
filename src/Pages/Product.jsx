import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import {ShopContext} from '../Context/ShopContext';
import ProductDisplay from '../Components/productDisplay/ProductDisplay';


const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {Id} = useParams();
  const product = all_product.find((e)=> e.id == Id);

  return (
    <div>
      <ProductDisplay product={product}/>

    </div>
  )
}

export default Product