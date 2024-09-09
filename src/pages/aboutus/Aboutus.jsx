import React from 'react'
import Commonpage from '../commonpage/Commonpage';
import about from'../../assets/Images/logo/logo6.png'
import Moreabout from './Moreabout';


const Aboutus = () => {
  return (
    <>
    <Commonpage title="About" subTitle="GundrukReads" desc="Welcome to GundrukReads, your one-stop destination for all things manga! Whether you’re a seasoned manga enthusiast or just getting started, we’ve created a platform that brings your favorite stories right to your fingertips. Our mission is to provide a vast collection of manga, ranging from classic series to the latest releases, for readers all over the world."
    desc1="At GundrukReads, we believe that manga is more than just comics—it’s a form of art and storytelling that connects people across cultures and generations. Our carefully curated selection covers a wide variety of genres, including action, romance, fantasy, horror, and slice of life, ensuring there’s something for everyone."
    btnAbout="Learn More"
    visit="/more-info"
    imageAbout={about}
    ></Commonpage>
    <Moreabout />

</>
);
};

export default Aboutus