import React, { useState } from "react";
import ReactDOM from "react-dom";

//import {  Grid } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const BookReviews = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([])

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment])
  }

  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  return (
    <div style={{ padding: 14 }} className="App">
      <div className="Main-container">
        
       
        <div className="comment-section">
          <div className="container">  
          <div className="d-flex justify-content-start">
            <h3>Comentarios</h3>
          </div>
          <div className="form-outline">
          
            <textarea className="form-control" value={comment} onChange={onChangeHandler} id="textAreaExample" rows="4" placeholder="Ingresa tu opinión"></textarea>
            <div className="d-flex justify-content-start">
            <button className="bg-success text-white mt-2 rounded" onClick={onClickHandler}>Publicar</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      {comments.map((text)=>(
          <div className="container mt-3"> 
          <Paper style={{ padding: "40px 20px" }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={imgLink} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Name Lastname</h4>
              <p style={{ textAlign: "left" }}>{text}</p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  posted {currDate} {currTime}
                </p>              
              </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          </Paper>
          </div>
        ))}
      
      
    </div>
  );
}

export default BookReviews;

