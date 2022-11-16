import React, {useState} from 'react';
import bookcase from "../../Assets/Images/bookcase.jpg";
import {Input} from "../../Components/Input";
import Button from "../../Components/Button";

const Create = () => {

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

    const formData = {
      name: target.name.value,
      author: target.name.value,
      description: target.description.value,
      price: target.price.value,
      available: target.available.checked,
      image: target.image.value
    }

    let data = new FormData();
    data.append("json", JSON.stringify( formData ))

    console.log(data)

    await fetch('http://localhost:4000/books',{
      method: 'POST',
      body: data,
      mode: "no-cors"
    })
      .then(function(res){ return res.json(); })
      .then(function(data){ alert( JSON.stringify( data ) ) })

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