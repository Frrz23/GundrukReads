import React from 'react'
import Commonpage from '../commonpage/Commonpage';
import learnimage from'../../assets/Images/logo/logo6.png';
import Moreabout from '../aboutus/Moreabout';

const Learnmore = () => {
  return (
   <>
   <Commonpage title="About" subTitle="GundrukReads" desc="Welcome to GundrukReads, your one-stop destination for all things manga! Whether you’re a seasoned manga enthusiast or just getting started, we’ve created a platform that brings your favorite stories right to your fingertips. Our mission is to provide a vast collection of manga, ranging from classic series to the latest releases, for readers all over the world."
    desc1="At GundrukReads, we believe that manga is more than just comics—it’s a form of art and storytelling that connects people across cultures and generations. Our carefully curated selection covers a wide variety of genres, including action, romance, fantasy, horror, and slice of life, ensuring there’s something for everyone."
    desc2="We are passionate about making manga accessible to all, so we’ve designed our platform to be user-friendly and easy to navigate. With secure payments, fast delivery, and responsive customer service, we aim to offer the best possible experience to our readers."
    desc3="Join us on this exciting journey and dive into the world of captivating stories, stunning artwork, and unforgettable characters. Whether you’re looking to expand your collection or discover new series, GundrukReads has it all!"
    desc4="Thank you for choosing GundrukReads. We’re excited to be part of your manga adventure."
    btnAbout="Contact Us"
    imageAbout={learnimage}
    ></Commonpage>
    <Moreabout />
   </>
  )
}

export default Learnmore