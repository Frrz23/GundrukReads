import React from 'react'
import BannerPage from '../banner/BannerPage';
import Products from '../product/Products';

const Home = () => {
  return (
    <>
    <div className='BannerPage'>
        <BannerPage/>
    </div>
    <div>
      <Products></Products>
    </div>
    </>
  )
}

export default Home
