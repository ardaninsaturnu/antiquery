import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Book} from "../../types";
const URL = 'http://localhost:4000/books';

const Home = () => {
  const [ books, setBooks ] = useState< Book[] | null >(null );

  useEffect( () => {
    ( async () => {
      return await axios.get(URL)
        .then( res => res.data )

        .then( data => {
          const { books } = data;
          setBooks( books );

        })
        .catch( e => alert( e ) )
    })()

  },[])

  return (
    <>
      { books && books.map( (a : any, index : number ) => (
        <div key={index}>
          <img src={a.image} width="500" alt="image"/>
        </div>
      ) ) }
    </>
  );
};

export default Home;