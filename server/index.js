import express from 'express';
import mongoose from "mongoose";
import bookRouter from "./routes/book-routes.js";
import cors from 'cors';

const app = express();
app.use( express.json() );
app.use( cors() );
app.use( '/books', bookRouter );

mongoose
  .connect("mongodb+srv://booquery:booquery123@cluster0.cnsamjg.mongodb.net/?retryWrites=true&w=majority" )
    .then( () => console.log('Connected to Database') )
    .then( () => app.listen(4000) )
    .catch( err => console.log( err ) );
