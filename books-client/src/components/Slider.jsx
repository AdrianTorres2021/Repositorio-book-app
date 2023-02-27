import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import SliderCSS from '../views/Slider.module.css'
import { Link } from 'react-router-dom'

const SimpleSlider = (props) => {
    console.log(props.type);
    var settings = {
        swipe: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
      let value = props.type;
      const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:"+value)
        .then(res=>{
        setBooks(res.data.items)
        }
        )
        .catch(err=>console.log("Error: ", err))
    }, []);

    const onClickHandler = () => {
        console.log(books[0].volumeInfo);
    }
      return (
        <div className={SliderCSS.Slidercontainerfather}>
            
            
            <div className="container">
          <h2> {props.tipo}</h2>
          </div>
        <div className={`container w-100 ${SliderCSS.Slidercontainerchild}`}> 
          <Slider {...settings}>
            
          {books.map((books, index) => {
            
            const {title, authors} = books.volumeInfo
            const {thumbnail} =  books.volumeInfo.imageLinks
            const {id} = books
            return(
                <>
                <div className="cardContainer">
                <div className={`card w-75 mx-5 ${SliderCSS.cardsSizing}`}key={index}>
                <Link className="link-to-reportar" to={`/reviews/${id}`} >
                <img src={thumbnail} className="card-img-top mt-3" alt="..." ></img>   
                  </Link>
                  
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-text">{authors}</p>
                    <button >Add to favorite</button>
                </div>
            </div>
            </div>
                </>
                
            )
        })}
            
            
            
          </Slider>
          </div>
        </div>
      );
    
}

export default SimpleSlider