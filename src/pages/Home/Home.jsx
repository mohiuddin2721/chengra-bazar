import React from 'react'
import TopSlider from './TopSlider'
import FeatureSlider from './FeatureSlider'
import ShortCart from './ShortCart'
import Categories from './Categories'
import AllProducts from './AllProducts'

function Home() {
  return (
    <div>
      <TopSlider />
      <FeatureSlider />
      <ShortCart />
      <Categories />
      <AllProducts />
    </div>
  )
}

export default Home