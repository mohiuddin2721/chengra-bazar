import React from 'react'
import TopSlider from './TopSlider'
import FeatureSlider from './FeatureSlider'
import ShortCart from './ShortCart'
import Categories from './Categories'
import AllProducts from './AllProducts'
import { PuffLoader } from 'react-spinners'
import OffersSection from './OffersSection'

function Home() {
  return (
    <div>
      <TopSlider />
      <OffersSection />
      <ShortCart />
      <Categories />
      <AllProducts />
      <FeatureSlider />
      {/* <PuffLoader color="#36d7b7" /> */}
    </div>
  )
}

export default Home