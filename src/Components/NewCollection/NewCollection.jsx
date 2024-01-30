import React from 'react'
import "./NewCollection.css"
import Item from '../item/item'
import new_collection from "../Assets/new_collections"


const NewCollection = () => {
  return (
    <div className='popular'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="popular-item">
            {new_collection.map((item, i)=> {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}

        </div>
    </div>
  )
}

export default NewCollection