import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import SliderCSS from './Slider.module.css'
import SimpleSlider from '../components/Slider';



const Slidersview = () => {
return(
  <>
  <div className={`container ${SliderCSS.Slidercontainerfather}`}>
    <h1>Categorías</h1>
  </div>
  <SimpleSlider type={"science"} tipo={"Ciencia"}/>
  <SimpleSlider type={"history"} tipo={"Historia"}/>
  <SimpleSlider type={"fantasy"} tipo={"Fantasía"}/>
  <SimpleSlider type={"fiction"} tipo={"Ficción"}/>
  </>
)}

export default Slidersview