import React from 'react'
import TopSlider from './TopSlider'
import FeatureSlider from './FeatureSlider'
import ShortCart from './ShortCart'
import Categories from './Categories'
import AllProducts from './AllProducts'
import { PuffLoader } from 'react-spinners'

function Home() {
  return (
    <div>
      <TopSlider />
      <FeatureSlider />
      <ShortCart />
      <Categories />
      <AllProducts />
      {/* <PuffLoader color="#36d7b7" /> */}
    </div>
  )
}

export default Home