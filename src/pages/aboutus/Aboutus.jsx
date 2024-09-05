import React from 'react'
import Commonpage from '../commonpage/Commonpage';
import about from'../../assets/Images/img/about.png'
import Moreabout from './Moreabout';


const Aboutus = () => {
  return (
    <>
    <Commonpage title="About" subTitle="GundrukReads" desc="At Gamer Gaun, we specialize in offering the best gaming accessories to elevate your gaming experience. Whether you are a casual player or a hardcore gamer, we have everything you need to stay ahead in the game."
    desc1="From top-quality headphones and mechanical keyboards to precision mice and smooth mousepads, our products are selected to meet the demands of gamers who settle for nothing but the best."
    btnAbout="Learn More"
    visit="/more-info"
    imageAbout={about}
    ></Commonpage>
    <Moreabout />

</>
);
};

export default Aboutus