import express from "express";
import Book from '../model/Book.js';

const router = express.Router();

router.get('/', async (req,res,next) => {
  //this route will provide all the books
  let books;
  try {
    books = await Book.find();
  } catch (e) {
    console.log(e)
  }
  
  if( !books ){
    return res.status( 404 ).json({message: 'No books found.'});
  }
  
  return res.status( 200 ).json( { books });
});

export default router;