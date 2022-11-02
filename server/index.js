import express from 'express';
import mongoose from "mongoose";
import router from "./routes/book-routes.js";

const app = express();

app.use( '/books', router );

mongoose
  .connect("mongodb+srv://booquery:booquery123@cluster0.cnsamjg.mongodb.net/?retryWrites=true&w=majority" )
    .then( () => console.log('Connected to Database') )
    .then( () => app.listen(4000) )
    .catch( err => console.log( err ) );