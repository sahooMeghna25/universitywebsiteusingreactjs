import React from "react";

import  {Carousel} from "react-bootstrap";


const CarouselContainer= ()=>{
return(
<>
<Carousel>
  <Carousel.Item interval={2000} controls={false} fade={false}>
    <img
      className="d-block w-100"
      src="https://assets.telegraphindia.com/telegraph/25oriOUAT1_191856.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item Interval={2000} fade={false} controls={false}>
    <img
      className="d-block w-100 h-100"
      src="https://images.shiksha.com/mediadata/images/1528714390phpRtVbd7.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item Interval={2000} fade={false} controls={false}>
    <img
      className="d-block w-100"
      src="https://getmyuni.azureedge.net/college-image/big/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar.jpg"
     width= "500px" alt="Third slide"
    />

    <Carousel.Caption Interval= {2000}>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </>
); 


};
export default CarouselContainer;
