import React from 'react'
import Carousel  from 'react-bootstrap/Carousel';
import {items} from "./BannerData"


const BannerPage = () => {
    return (
      <>
      <div className='w-[89rem] pl-[98px]'>
        <Carousel indicators={false} >
          {items.map((value, index) => (
            <Carousel.Item key={value.id}>
              <img src={value.Image} alt={value.title} />
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
      </>
    );
};

export default BannerPage;

