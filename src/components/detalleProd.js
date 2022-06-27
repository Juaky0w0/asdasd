import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Sliderprod.css"
import { detalleProd } from '../components/data';

export function DetalProd(){
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };    
    return(
      <>
      <div>
        <div>

        </div>      
        <div className="detPro">
            <Slider {...settings}>
             {detalleProd.map(item=>(
                 <div className="detacard">
                 <div className="detacart-top">
                 <img src={item.linkimg} alt={item.title}/>
                 <h4>{item.title}</h4>
                 </div>
                
             </div>
            ))}      
            </Slider>             
        </div>
        </div>
        </>
    );
}
