import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import alumaniImage from '../../assets/images/alumani.jpeg';
import tifcImage from '../../assets/images/tifc.jpeg';
import clgImage from '../../assets/images/clg.jpeg';

const Photo = [
    {
        id : 1,
        image: alumaniImage,

    },
    {
        id : 2,
        image: tifcImage,
    },
    {
        id:3,
        image: clgImage,
    }
]


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };



const PhotoSlider = () => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
    >
    <div>
     {
        Photo.map((photo) => (
            <div key={photo.id}>

                    <div>
                        <img src={photo.image} alt="image" />
                        </div>

                        </div>
                        ))
     }
    </div>
    </Carousel>
  );
};

export default PhotoSlider;
