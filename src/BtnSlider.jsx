import React from 'react';
import "./slider.css";
import leftArrow from "./icon/leftArrow.png";
import rightArrow from "./icon/rightArrow.png" ;

const BtnSlider=({direction, moveSlide})=>{
    return(

        <button className={direction=== "next" ? 'btn-slide next' : "btn-slide prev"} onClick={moveSlide}>
<img src={direction=== "next ? rightArrow : leftArrow"}/>

        </button>
    );
};

export default BtnSlider;
