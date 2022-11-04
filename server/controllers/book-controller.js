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
  
  console.log('successed bro');
  return res.status( 201 ).json({ book })
}

// getBook controller
export const getBook = async ( req, res, next ) => {
    const id = req.params.id;
    let book;
    
    try {
      book = await Book.findById( id );
    } catch (e) {
      console.log( e );
    }
    
    if( !book ){
      return res.status( 404 ).json( { message: 'no message found' } );
    }
    
    return res.status( 200 ).json( { book } );
}

// update book controller
export const updateBook = async ( req, res, next ) => {
  const id = req.params.id;
  const { name, author, description, price, available } = req.body;
  let book;
  
  try {
    book = await Book.findByIdAndUpdate( id, {
      name,
      author,
      description,
      price,
      available
    } );
    
    book = await book.save();
  } catch (e) {
    console.log( e );
  }
  
  if( !book ){
    return res.status( 404 ).json({ message: 'unable to update' });
  }
  return res.status( 200 ).json( {book} );
}

// delete book controller
export const deleteBook = async ( req, res, next ) => {
  const id = req.params.id;
  let book;
  
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (e) {
  console.log( e )
  }
  
  if( !book ){
    return res.status(404).json( {message: 'no deleted item'} )
  }
  
  return res.status(200).json({book})
}