import React, {useState, useEffect} from 'react'
import BookSection from '../components/BookSection'
import BookReviews from '../components/Reviews'
import { useParams } from "react-router";
import axios from 'axios';


const BookDetails = () => {
    let { id } = useParams();
    const [bookDetails, setBookDetails] = useState([]);
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(res => setBookDetails(res.data.volumeInfo))
            .catch(err => console.log(err))
    }, [id])

    return(
        <>
            <BookSection book={bookDetails} id={id}/>
            <BookReviews />
        </>
    )
}

export default BookDetails