import axios from 'axios'
import React, {useState, useEffect} from 'react'



const BookSection = (props) => {
    
    let {book} = props
    let id = props.id;
    
    let [imagen, setImagen] = useState("");
    
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(res => setImagen(res.data.volumeInfo.imageLinks.thumbnail))
            .catch(err => console.log(err))
    }, [id])
    
    useEffect(() => {
        console.log(imagen)
    }, [imagen])
    
    return(
       <div className={`container mt-5`}>
        <div className="container d-flex border rounded justify-content-around">
        <div className="w-50 ">
            <h3>Título</h3>
            <h5 >{book.title}</h5>
            <p>{book.subtitle}</p>
            <h3>Autores</h3>
            <h6>{book.authors}</h6>
            <h3>Descripción</h3>
            <p className="text-start">{book.description}</p>
            
        </div>
        <div className="d-flex align-items-center">
       
            <img src={imagen}  alt="..."></img> 
        </div>
        </div>
    </div>
    
    )
}

export default BookSection