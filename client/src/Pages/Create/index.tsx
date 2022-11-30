import React from 'react';
import bookcase from "../../Assets/Images/bookcase.jpg";
import {Input} from "../../Components/Input";
import Button from "../../Components/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Create = () => {
  const history = useNavigate();

  const handleSubmit = async ( e : React.FormEvent <HTMLFormElement> ) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      author: { value: string };
      description: { value: string };
      price: { value: number };
      available: { checked: boolean };
      image: { value: string };
    };

    const formData  = {
      name: String(target.name.value),
      author: String(target.name.value),
      description: String(target.description.value),
      price: Number(target.price.value),
      available: Boolean(target.available.checked),
      image: String(target.image.value)
    }

    try {
      await axios.post('http://localhost:4000/books', formData )
        .then( res => res.data )
        .then( () => history('/books') )

    } catch {
      alert('something went mamet')
    }

  }

  return (
    <div className="py-5" style={{background: `url(${bookcase})`, backgroundSize:'contain'}}>
     <div className="w-full max-w-xl mx-auto">
       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={ handleSubmit }>
         <h1 className="text-3xl text-blue-500 font-medium my-2">Create new book</h1>
         <Input label="name" name="name" type="text" />
         <Input label="author name" name="author" type="text" />
         <Input label="description" name="description" type="text" />
         <Input label="price" name="price" type="number" />
         <Input label="available" name="available" type="checkbox" />
         <Input label="image" name="image" type="text" />
         <Button name="Ekle" buttonStyle='boolue' type="submit"/>
       </form>
     </div>
  </div>
  );
};

export default Create;