import React from 'react'
import Carousel  from 'react-bootstrap/Carousel';
import Firstbanner from "../../assets/Images/cover/cover1.jpg";
import Secondbanner from "../../assets/Images/cover/cover2.jpg";
import Thirdbanner from "../../assets/Images/cover/cover3.jpg";
import Fourthbanner from "../../assets/Images/cover/cover4.jpg";
import {items} from "./BannerData"


const BannerPage = () => {
    return (
      <>
        <Carousel indicators={false}>
          {items.map((value, index) => (
            <Carousel.Item key={value.id}>
              <img src={value.Image} alt={value.title} />
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    );
};

export default BannerPage;

