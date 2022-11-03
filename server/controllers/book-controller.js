import Book from "../model/Book.js";

// get All Books controller
export const getAllBooks = async ( req, res, next ) => {
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

// addBook controller
export const addBook = async ( req, res, next ) => {
  const { name, author, description, price, available } = req.body;
  let book;
  
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available
    })
    
    await book.save();
    
  } catch (e){
    console.log(e)
  }
  
  if (!book){
    return res.status(500).json({ message: 'Unable to add' })
  }
  
  return res.status( 201 ).json({ book })
}

