import React from 'react'
import Commonpage from '../commonpage/Commonpage';

import learnimage from'../../assets/Images/img/about.png'

const Learnmore = () => {
  return (
   <>
   <Commonpage title="Information" subTitle="MoreOver" desc="fuksjddhkAt Gamer Gaun, we specialize in offering the best gaming accessories to elevate your gaming experience. Whether you are a casual player or a hardcore gamer, we have everything you need to stay ahead in the game."
    desc1="lorem20jkdvksf From top-quality headphones and mechanical keyboards to precision mice and smooth mousepads, our products are selected to meet the demands of gamers who settle for nothing but the best."
    desc2="lorem20jk"
    btnAbout="Contact Us"
    imageAbout={learnimage}
    ></Commonpage>
   </>
  )
}

export default Learnmore