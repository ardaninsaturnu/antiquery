import React, {useEffect, useState} from 'react';
import axios from "axios";
const URL = 'http://localhost:4000/books';

const Home = () => {
  const [ books, setBooks ] = useState<any>([])

  useEffect( () => {

    ( async () => {
      return await axios.get(URL)
        .then( res => res.data )
        .then( data => setBooks( data ) )
    })()

  },[])

  return (
    <>
      {books.map( ( book : any ) => <div>{ book && book.name }</div> )}
    </>
  );
};

export default Home;