import Book from "../model/Book.js";

const getAllBooks = async ( req, res, next ) => {
  let books;
  
  try {
    books = await Book.find();
  } catch ( e ) {
    console.log( e )
  }
  
  if( !books ) {
    return res.status(404).json( { message: "No products found" } )
  }
  
  return res.status(200).json( { books } )
}

export default getAllBooks;