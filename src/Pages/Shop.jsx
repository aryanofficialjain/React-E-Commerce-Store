import React from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import NewCollection from '../Components/NewCollection/NewCollection';
import Newsletter from '../Components/Newsletter/Newsletter';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <NewCollection/>
      <Newsletter/>
    </div>
  )
}

export default Shop