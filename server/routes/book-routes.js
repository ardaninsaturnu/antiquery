/*
* import express from "express";
import {getAllBooks, addBook, getBook, updateBook, deleteBook} from "../controllers/book-controller.js";

const bookRouter = express.Router();

bookRouter.get( '/', getAllBooks );
bookRouter.post( '/', addBook );
bookRouter.get( '/:id', getBook );
bookRouter.put( '/:id', updateBook );
bookRouter.delete( '/:id', deleteBook );

export default bookRouter;
* */